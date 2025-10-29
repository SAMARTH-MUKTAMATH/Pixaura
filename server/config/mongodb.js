import mongoose from 'mongoose'
const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected')
    })
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/imagify`)
        console.log('MongoDB connected')
    } catch (error) {
        console.log('Error connecting to MongoDB', error)
    }
}

export default connectDB
