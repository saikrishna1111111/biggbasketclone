import mongoose from "mongoose";

const Add =new mongoose.Schema({
    FirstName:String,
    LastName:String,
    city:String,
    postalCode:String,
    address:String,
    number:String,
    state:String,
    country:{
        type:String,
        default :"India"
    }
})

const AddressSchma =new mongoose.Schema({
    email:String,
    Address :[Add]
})
const AddModel = mongoose.model("address", AddressSchma)
export default AddModel