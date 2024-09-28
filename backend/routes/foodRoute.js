

import express from 'express';
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from 'multer'

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    }
})
const upload = multer({storage:storage})
foodRouter.post("/add",upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)

export default foodRouter

// correct  

// import express from 'express';
// import multer from 'multer';
// import { addfood } from "../controllers/foodController.js";

// const foodRouter = express.Router();

// // Multer configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads"); // Ensure the "uploads" directory exists
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`); // Unique filename with timestamp
//     }
// });

// const upload = multer({ storage: storage });

// // Route to add food with image upload
// foodRouter.post("/add", upload.single("image"), addfood);

// export default foodRouter;
