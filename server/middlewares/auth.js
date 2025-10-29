import jwt from 'jsonwebtoken'

const userAuth = (req, res, next) => {
    console.log('=== AUTH MIDDLEWARE DEBUG ===');
    console.log('Headers received:', req.headers);
    
    // Try both header formats
    let token = req.headers.token || req.headers.authorization?.replace('Bearer ', '');
    
    console.log('Token found:', token ? 'Yes' : 'No');
    console.log('Token value:', token);
    
    if (!token) {
        console.log('No token provided');
        return res.status(401).json({
            success: false,
            message: 'Not authorized, please login',
        });
    }

    try {
        console.log('Attempting to verify token...');
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token decoded:', tokenDecoded);
        
        if (tokenDecoded.id) {
            req.userId = tokenDecoded.id;
            req.user = { id: tokenDecoded.id };
            console.log('Auth successful, userId set to:', req.userId);
            console.log('=============================');
        } else {
            console.log('No user ID in token');
            return res.status(401).json({
                success: false,
                message: 'Not authorized, please login',
            });
        }
        next();
    } catch (error) {
        console.error('JWT verification failed:', error.message);
        console.log('=============================');
        res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
}

export default userAuth
