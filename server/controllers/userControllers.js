import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide name, email and password'
            })
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword,
            creditBalance: 5 // Give new users 5 credits by default
        }

        const newUser = new userModel(userData)
        const savedUser = await newUser.save()

        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in environment variables')
        }

        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: '24h' // Fixed: was '24' should be '24h'
        })

        res.json({
            success: true,
            token,
            user: { 
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                credits: savedUser.creditBalance // Include credits in response
            },
            credits: savedUser.creditBalance // Also include at root level
        })

    } catch (error) {
        console.error('Error registering user:', error.message)
        res.status(500).json({
            success: false,
            message: error.message || 'Error registering user'
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password'
            })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }

        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in environment variables')
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '24h' // Fixed: was '24' should be '24h'
        })

        res.json({
            success: true,
            token,
            user: { 
                id: user._id,
                name: user.name,
                email: user.email,
                credits: user.creditBalance // Include credits in response
            },
            credits: user.creditBalance // Also include at root level
        })

    } catch (error) {
        console.error('Error logging in user:', error.message)
        res.status(500).json({
            success: false,
            message: error.message || 'Error logging in user'
        })
    }
}

const userCredits = async (req, res) => {
    try {
        const userId = req.userId // Fixed: should be req.userId (set by your auth middleware)
        const user = await userModel.findById(userId)
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        res.json({
            success: true,
            credits: user.creditBalance,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                credits: user.creditBalance // Also include credits in user object
            }
        })
        
    } catch (error) {
        console.error('Error fetching user credits:', error.message)
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching user credits'
        })
    }
}

export { registerUser, loginUser, userCredits }
