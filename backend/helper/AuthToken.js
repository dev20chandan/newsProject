import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token ) return res.sendStatus(401)

    jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['RS256', 'RS384', 'RS512', 'HS256', 'HS384', 'HS512'] }, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        console.log(user, ">>>>>>>>>>>>>>token");
        req.user = user
        next()
    })
}


// export const verifyJWT = async(req, res, next) => {
//     try {
//         const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
//         if (!token) {
//            return res.sendStatus(401)
//         }
    
//         const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
//         const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
//         if (!user) {
            
//             throw new ApiError(401, "Invalid Access Token")
//         }
    
//         req.user = user;
//         next()
//     } catch (error) {
//         throw new ApiError(401, error?.message || "Invalid access token")
//     }
    
// }


