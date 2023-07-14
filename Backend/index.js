import express from 'express'
const app = express();
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { register, login } from './controllers/User.controllers.js';
import { addProduct, allProducts } from './controllers/Product.controllers.js';
import mongoose from 'mongoose';
dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Working...")
})

//user routes
app.post('/register', register)
app.post('/login', login)

//product routes
app.post('/add-product', addProduct)
app.get('/all-product', allProducts)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Conncted to DB.")
}).catch((error) => {
    console.log("Error while DB connection:", error)
})

app.listen(8000, () => {
    console.log("Server is listening on port 8000.")
})