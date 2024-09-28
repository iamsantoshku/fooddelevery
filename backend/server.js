
// import connectDB from './config/db.js';
// const bodyParser = require('body-parser')
import { connectDB } from './config/db.js';
// import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors'
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 4000;
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors())


connectDB();

app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use("/api/order", orderRouter)

app.get('/', (req, res) => {
    res.send('this is backend');
});


app.listen(port, () => {
    console.log(`App is running on ${port}`);
});




// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';
// // import connectDB from './config/db.js'; // Adjust this if your database connection setup is different
// import foodRouter from './routes/foodRoute.js';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());

// // Static folder for images
// app.use('/uploads', express.static('uploads'));

// // Connect to the database
// connectDB();

// // Test route
// app.get('/gett', (req, res) => {
//     res.send('This is backend');
// });

// // Food routes
// app.use('/api/food', foodRouter);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// insert into <tablename> value[vale1, value2, value3]

// create database studentrecord;
// use studentrecord;
// creaet table student(sid int, sname Char(20),age int)

// insert into student values(101, aniq, 19), (102, santosh, 22),(109221, sdfwkf, 3434);


// // update

// update <tablename> SET <columnname>= value 


// update student SET sname = 'santosh',  where sid = 101;

// delete form student where age = '22'








