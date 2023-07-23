import mongoose, { Schema, mongo } from "mongoose";

const productSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    artnumber: {
        type: String,
        required: true
    },
})

export default mongoose.model("Product", productSchema)