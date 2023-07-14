import User from './../modal/User.schema.js';

export const register = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;
        if (!name || !email || !password) return res.send("Fields are unfilled..")

        const isUserExist = await User.findOne({
            email
        })
        if (isUserExist) {
            return res.json({
                status: 404,
                message: "Email already used try different one.."
            })
        }
        const newUser = new User({
            name,
            email,
            password
        });
        await newUser.save();
        return res.json({
            status: 200,
            message: "Regiseration Complete."
        })
    } catch (error) {
        return res.send(error)
    }
}

export const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        if (!email || !password) return res.send("Fields are unfilled..")

        const user = await User.findOne({
            email,
            password
        });
        if (user) {
            return res.json({
                status: 200,
                message: "Login successfull."
            })
        }
        return res.send("Credentials wrong..")
    } catch (error) {
        return res.send(error)
    }
}