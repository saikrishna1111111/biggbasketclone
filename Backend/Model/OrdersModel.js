import mongoose from "mongoose";

const itemsSchma = new mongoose.Schema({
    id: String,
    name: String,
    price: String,
    image: String
})

const Orderschma = new mongoose.Schema({
    email: String,
    items: [itemsSchma]
})

const OrdersModel = mongoose.model("ordersData", Orderschma)

export default OrdersModel