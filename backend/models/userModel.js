import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        uniqe:true
        
    },
    password:{
        type:String,
        required:true

    },
    // cartData: {
    //     type: Map,
    //     of: Number,
    //     default: {},
    // }
    cartData:{
        type:Object,
        default:{}
    }
},{minimize:false})

const userModel = mongoose.model.user || mongoose.model("user", userSchema)

export default userModel;