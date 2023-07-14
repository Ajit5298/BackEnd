import Product from "../modal/Product.schema.js";

export const addProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body;
        if (!name || !price || !image) return res.send("Fields are unfilled..")
        const newProduct = new Product({ name, price, image });
        await newProduct.save();
        return res.send("Product added.")
    } catch (error) {
        return res.send(error)
    }
}

export const allProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products)
    } catch (error) {
        return res.send(error)
    }
}