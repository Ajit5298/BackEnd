import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        requiired: true
    },
    email: {
        type: String,
        requiired: true
    },
    password: {
        type: String,
        requiired: true
    },
})

export default mongoose.model("User", userSchema)