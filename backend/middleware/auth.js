import jwt from "jsonwebtoken"
// const authMiddleware = async(req, res, next)=>{
//     const {token} = req.headers;
//     if(!token){
//         return res.json({success:false, message:"not authorigize"})
//     }
//     try{
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id;
//         next();
//     }catch(error){
//         console.log(error);
//         res.json({success:false, message:"error"})

//     }

// }
// export default authMiddleware;




const authMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({success: false, message: "not authorized"});
    }

    const token = authHeader.split(' ')[1];
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
        console.log(process.env.JWT_SECRET)
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error"});
    }
    console.log(process.env.JWT_SECRET)
}
export default authMiddleware;



// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//     const token = req.headers.token;

//     if (!token) {
//         return res.status(401).json({ success: false, message: "Unauthorized, token missing" });
//     }

//     try {
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = { userId: decodedToken.id }; // Store userId in req.user
//         next();
//     } catch (error) {
//         console.error(error);
//         return res.status(401).json({ success: false, message: "Invalid or expired token" });
//     }
// };

// export default authMiddleware;



// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token

//   if (!token) {
//     return res.status(401).json({ success: false, message: "Unauthorized, token missing" });
//   }

//   try {
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { userId: decodedToken.id }; // Store userId in req.user
//     next();
//   } catch (error) {
//     console.error(error);
//     return res.status(401).json({ success: false, message: "Invalid or expired token" });
//   }
// };

// export default authMiddleware;
