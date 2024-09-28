import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import authMiddleware from "../middleware/auth.js";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async(req, res)=>{
    const frontend_url = "http://127.0.0.1:5173"
    try{
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address

        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}});
        // await userModel.findByIdAndUpdate(req.body.userId);
        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
                
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"delivery charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({success:true, session_url:session.url})

    }
    catch(error){
        console.log(error);
        res.json({success:false, message:"error"})

    }

}

export {placeOrder}



// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const placeOrder = async (req, res) => {
//   // const frontend_url = "http://localhost:5173";
//   const frontend_url = "http://127.0.0.1:5173";

//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId, // Get userId from req.user set by middleware
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });

//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
//     // await userModel.findByIdAndUpdate(req.user.userId);


//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: { name: item.name },
//         unit_amount: item.price * 100 * 80,
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "usd",
//         product_data: { name: "delivery charges" },
//         unit_amount: 2 * 100 * 80,
//       },
//       quantity: 1,
//     });

//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: 'payment',
//       success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//     });

//     res.json({ success: true, session_url: session.url });

//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error placing order" });
//   }
// };

// export { placeOrder };
