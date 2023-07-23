import express from 'express'
const app = express();
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { register, login, getCurrentUser, getSellProducts, getCurrentUserWithPass, updateProfile } from './controllers/User.controllers.js';
import { addProduct, allProducts } from './controllers/Product.controllers.js';
import mongoose from 'mongoose';
dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Working...")
})

// check user
app.post("/get-current-user", getCurrentUser)
app.post("/get-current-user-with-pass", getCurrentUserWithPass)

//user routes
app.post('/register', register)
app.post('/login', login)
app.post("/get-sell-products", getSellProducts)
app.post("/update-profile", updateProfile )

//product routes
app.post('/add-product', addProduct)
app.get('/all-products', allProducts)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Conncted to DB.")
}).catch((error) => {
    console.log("Error while DB connection:", error)
})

app.listen(8000, () => {
    console.log("Server is listening on port 8000.")
})