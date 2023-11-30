import mongoose from "mongoose"


const Schema = new mongoose.Schema({
    email:String,
    password:String
})
const BBModel = mongoose.model('bbUsers',Schema)
export default BBModel