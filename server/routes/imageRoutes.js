import express from 'express';
import userAuth from '../middlewares/auth.js';
import userModel from '../models/user.model.js';
import fetch from 'node-fetch';

const imageRouter = express.Router();

// Verification route to test API key
imageRouter.post('/verify-clipdrop', async (req, res) => {
  try {
    console.log('=== CLIPDROP API KEY VERIFICATION ===');
    console.log('API Key exists:', !!process.env.CLIPDROP_API_KEY);
    console.log('API Key preview:', process.env.CLIPDROP_API_KEY?.substring(0, 20) + '...');
    
    const FormData = (await import('form-data')).default;
    const form = new FormData();
    form.append('prompt', 'white cat sitting on a chair');

    const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.CLIPDROP_API_KEY,
        ...form.getHeaders()
      },
      body: form
    });

    console.log('Response Status:', response.status);
    console.log('Response OK:', response.ok);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.log('Error Details:', errorText);
      return res.json({
        success: false,
        error: errorText,
        status: response.status
      });
    }

    res.json({
      success: true,
      message: 'Clipdrop API is working correctly',
      status: response.status
    });

  } catch (error) {
    console.error('Verification Error:', error);
    res.json({
      success: false,
      error: error.message
    });
  }
});

// Main image generation route
imageRouter.post('/generate-image', userAuth, async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log('=== GENERATING IMAGE WITH CLIPDROP ===');
    console.log('Prompt received:', prompt);
    
    // Check user credits
    const user = await userModel.findById(req.userId);
    if (user.creditBalance <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient credits',
        creditBalance: 0
      });
    }

    // Prepare FormData with enhanced prompt for better results
    const FormData = (await import('form-data')).default;
    const form = new FormData();
    
    // Enhance the prompt for better accuracy
    const enhancedPrompt = `${prompt}, high quality, detailed, professional photography`;
    form.append('prompt', enhancedPrompt);
    
    console.log('Enhanced prompt:', enhancedPrompt);

    // Make API call to Clipdrop
    const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.CLIPDROP_API_KEY,
        ...form.getHeaders()
      },
      body: form
    });

    console.log('Clipdrop Response Status:', response.status);
    console.log('Clipdrop Response OK:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Clipdrop API Error:', errorText);
      throw new Error(`Clipdrop API failed: ${response.status} - ${errorText}`);
    }

    // Process the image response
    const imageBuffer = await response.buffer();
    const base64Image = imageBuffer.toString('base64');
    const imageUrl = `data:image/png;base64,${base64Image}`;

    console.log('Image generated successfully');
    console.log('Image size (bytes):', imageBuffer.length);

    // Deduct credit
    const updatedUser = await userModel.findByIdAndUpdate(
      req.userId, 
      { $inc: { creditBalance: -1 } },
      { new: true }
    );

    res.json({
      success: true,
      imageUrl: imageUrl,
      creditsRemaining: updatedUser.creditBalance,
      originalPrompt: prompt,
      enhancedPrompt: enhancedPrompt
    });

  } catch (error) {
    console.error('Image generation failed:', error.message);
    res.status(500).json({
      success: false,
      message: `Failed to generate image: ${error.message}`
    });
  }
});

export default imageRouter;
