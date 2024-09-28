// import userModel from "../models/userModel.js";

// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
// import validator from "validator";

// // login user

// const loginUser = async (req, res) =>{
//     const {email, password} = req.body;
//     try{
//         const user = await userModel.findOne({email});
//         if(!user){
//            return res.json({success:false, message:"user doesnot exit"})
//         }

//         const isMatch = await bcrypt.compare(password, user.password)
//         if(!isMatch){
//             return res.json({success:false, message:"invaid credential"})
//         }

//         const token = createToken(user._id);
//         // if(token){
//         return res.json({success:true, token})
        


//     }
//     catch(error){
//         console.log(error);
//         res.json({success:false, message:"error"})

//     }

// }
// const createToken = async(id) =>{
//     return jwt.sign({id},process.env.JWT_SECRET)
// }

// const registerUser = async (req, res) =>{
//     const {name, email, password} = req.body;
//     try{
//         // check user exits or not
//         const exists = await userModel.findOne({email});
//         if(exists){
//             return res.json({success:false, message:"user already exits"})
//         }

//         // validting email and password
//         if(!validator.isEmail(email)){
//             return res.json({success:false, message:"pls enter valid email"})
//         }

//         if(password.length < 8){
//             return res.json({success:false, message:"pls enter strong password"})
//         }

//         // hasing use passd
//         const salt = await bcrypt.genSalt(10)
//         const hashedpassword = await bcrypt.hash(password,salt)

//         const newUser = new userModel({
//             name:name,
//             email:email,
//             password:hashedpassword
//         })
//        const user =  await newUser.save()
//        const token = createToken(user._id);
//        res.json({success:true, token});
//     }
//     catch(error){
//         console.log(error)
//         res.json({success:false, message:"error"})

//     }

    

// }
// export {loginUser, registerUser}


import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = await createToken(user._id);
        return res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Function to create a JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if the user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a stronger password" });
        }

        // Hash the user's password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = await createToken(user._id);
        return res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { loginUser, registerUser };





