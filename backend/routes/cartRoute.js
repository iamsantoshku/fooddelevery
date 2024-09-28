// import express from "express"

// import { addtocart, removetocart, getcart } from "../controllers/cartController.js"
// import authMiddleware from "../middleware/auth.js";
// const cartRouter = express.Router();

// cartRouter.post("/add", authMiddleware,addtocart)
// cartRouter.post("/remove",authMiddleware, removetocart)
// cartRouter.post("/get",authMiddleware, getcart)

// export default cartRouter;


import express from "express";
import { addtocart, removetocart, getcart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

// Add item to cart
cartRouter.post("/add", authMiddleware, addtocart);

// Remove item from cart
cartRouter.post("/remove", authMiddleware, removetocart);

// Get the cart details (Should use GET instead of POST)
cartRouter.get("/", authMiddleware, getcart);

export default cartRouter;
