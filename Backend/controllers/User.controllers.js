import User from './../modal/User.schema.js';
import jwt from 'jsonwebtoken';
import Product from './../modal/Product.schema.js';

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) return res.send("Fields are unfilled..")

        const isUserExist = await User.findOne({ email })
        if (isUserExist) {
            return res.json({ status: 404, message: "Email already used try different one.." })
        }
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        return res.json({ status: 200, message: "Regiseration Complete." })
    } catch (error) {
        return res.send(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.send("Fields are unfilled..")

        const user = await User.findOne({ email, password }).select("-password");

        // console.log("Before token", user)

        const payload = { id: user._id }

        const token = jwt.sign(payload, process.env.JWT_SECRET);
        // console.log(token, "- token")
        if (user) {
            return res.json({ status: 200, message: "Login successfull.", data: token, user })
        }
        return res.send("Credentials wrong..")
    } catch (error) {
        return res.send(error)
    }
}


export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.send("Token is required!")

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // console.log(decodedToken, "decoeded tokem")

        const userId = decodedToken.id;

        const user = await User.findById(userId).select("-password");;

        if (user) {
            res.status(200).json({ data: user, status: "Sucess" })
        }

    } catch (error) {
        return res.send(error)
    }
}


export const getSellProducts = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.send("UserId is required!");
        const allProduct = await Product.find({ userId })
        return res.send(allProduct)
    } catch (error) {
        return res.send(error)
    }
}

export const getCurrentUserWithPass = async (req, res) => {
    try {
        const { userId } = req.body;
        console.log(userId, "userId")
        if (!userId) return res.send("User id is required!")

        const user = await User.findById(userId);

        if (user) {
            res.status(200).json({ data: user, status: "Sucess" })
        }

    } catch (error) {
        return res.send(error)
    }
}


export const updateProfile = async (req, res) => {
    try {
        const { name, email, password, _id } = req.body.userData;
        if (!name) return res.send("name is required");
        if (!email) return res.send("email is required");
        if (!password) return res.send("password is required");

        const result = await User.findByIdAndUpdate(_id, { name, email, password }, { returnDocument: 'after' })
        res.send(result);
    } catch (error) {
        return res.send(error)
    }
}