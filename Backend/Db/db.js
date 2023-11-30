import mongoose from "mongoose";


function Connection(){
    try {
        mongoose.connect('mongodb+srv://gsaikrishna200113:sai123@cluster0.ldff5nq.mongodb.net/?retryWrites=true&w=majority',{
        })
        console.log("DB Connection Successfull");
    } catch (error) {
        console.log(error);
    }
}export default Connection