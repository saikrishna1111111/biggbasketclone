import mongoose from "mongoose";

const itemsSchma = new mongoose.Schema({
    id: String,
    name: String,
    price: String,
    image: String
})

const CartSchma = new mongoose.Schema({
    email: String,
    items: [itemsSchma]
})

const CartModel = mongoose.model("cartData", CartSchma)

export default CartModel