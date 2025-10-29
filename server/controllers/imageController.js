

import express from 'express';
import userAuth from '../middlewares/auth.js';
import userModel from '../models/user.model.js';
import fetch from 'node-fetch';

const imageRouter = express.Router();

// Main image generation route
imageRouter.post('/generate-image', userAuth, async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log('Generating image with Clipdrop for prompt:', prompt);
    
    // Check user credits
    const user = await userModel.findById(req.userId);
    if (user.creditBalance <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient credits',
        creditBalance: 0
      });
    }

    // Create FormData for Clipdrop API
    const FormData = (await import('form-data')).default;
    const form = new FormData();
    form.append('prompt', prompt);

    // Clipdrop Text-to-Image API call
    const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.CLIPDROP_API_KEY,
        ...form.getHeaders()
      },
      body: form
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Clipdrop API error:', response.status, errorText);
      throw new Error(`Clipdrop API error: ${response.status} ${errorText}`);
    }

    // Get image as buffer and convert to base64
    const imageBuffer = await response.buffer();
    const base64Image = imageBuffer.toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64Image}`;

    // Deduct credit
    const updatedUser = await userModel.findByIdAndUpdate(
      req.userId, 
      { $inc: { creditBalance: -1 } },
      { new: true }
    );

    console.log('Image generated successfully for prompt:', prompt);

    res.json({
      success: true,
      imageUrl: imageUrl,
      creditsRemaining: updatedUser.creditBalance,
      prompt: prompt
    });

  } catch (error) {
    console.error('Clipdrop image generation error:', error.message);
    res.status(500).json({
      success: false,
      message: `Failed to generate image: ${error.message}`
    });
  }
});

// Test endpoint (optional - for debugging)
imageRouter.post('/test-clipdrop', userAuth, async (req, res) => {
  try {
    console.log('Testing Clipdrop API key...');
    console.log('API Key exists:', !!process.env.CLIPDROP_API_KEY);
    
    const FormData = (await import('form-data')).default;
    const form = new FormData();
    form.append('prompt', 'test white cat');

    const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.CLIPDROP_API_KEY,
        ...form.getHeaders()
      },
      body: form
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log('Error response:', errorText);
      return res.json({
        success: false,
        status: response.status,
        error: errorText
      });
    }

    res.json({
      success: true,
      status: response.status,
      message: 'Clipdrop API is working correctly'
    });

  } catch (error) {
    console.error('Test error:', error);
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

export default imageRouter;
