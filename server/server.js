    import express from 'express'
    import cors from 'cors'
    import 'dotenv/config'
    import connectDB from './config/mongodb.js'
    import userRouter from './routes/userRoutes.js'
    import imageRouter from './routes/imageRoutes.js'

    const PORT = process.env.PORT || 4000
    const app = express()

    // Middleware
    app.use(express.json())
    app.use(cors())

    // Database connection
    try {
        await connectDB()
        console.log('Database connected successfully')
    } catch (error) {
        console.error('Database connection failed:', error)
        process.exit(1)
    }

    // Routes
    app.use('/api/users', userRouter)
    app.use('/api/image', imageRouter)

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    // ✅ Fixed 404 handler for Express 5
    app.use(/.*/, (req, res) => {
        res.status(404).json({
            success: false,
            message: `Route ${req.originalUrl} not found`
        })
    })

    // Error handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).json({
            success: false,
            message: 'Something went wrong!'
        })
    })

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
