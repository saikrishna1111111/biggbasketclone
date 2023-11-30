import express from 'express'
import bodyParser from 'body-parser'
import Connection from './Db/db.js';
import BBModel from './Model/Model.js'
import AddModel from './Model/AddressModel.js';
import CartModel from './Model/CartModel.js'
import Nodemailer from 'nodemailer'
import cors from 'cors'
import  Jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import OrdersModel from './Model/OrdersModel.js'

const app = express()
app.use(bodyParser.json());
app.use(cors())
Connection()


app.post("/add-user",
  async (req, response) => {
    const {email, password} = req.body
    const CheckUserExist = await BBModel.findOne({ email: email })

    if (CheckUserExist == null) {
      const newPassword =  await bcrypt.hash(password,10)
      const newData1  = {email,password:newPassword}
      const newData = new BBModel(newData1)
      console.log(newData);
      try {
        await newData.save();

        response.status(201).json(newData);
      } catch (error) {
        response.status(409).json({ messaage: "User creation failed" });
      }
    }
    else {
      response.send("already had this email")
    }
  })



app.post('/send-email',async(req,res)=>{
  const otpNumber = Math.floor(100000+ Math.random()*900000)
  const transporte = Nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
   port: 465,
   secure: true,
    auth:{
      user:"g.saikrishna200113@gmail.com",
      pass:"swga zxhe ldjd zkze"
    }
  })
  const mailOption ={
    from:"g.saikrishna200113@gmail.com",
    to:req.body.email,
    subject:"bb otp verification sai krishna",
    text:`your otp is ${otpNumber}`
  }
  transporte.sendMail(mailOption,(err,info)=>{
    if(err){
      res.send("time out")
    }
    else{
      res.send(JSON.stringify(otpNumber))
    }
  })

})
  


app.post('/user-login-check', async (req, res) => {
  const {email,password} = req.body
  try {
    const sd = await BBModel.findOne({ email: email });
    console.log(sd)
    const passwordCheck = await bcrypt.compare(password, sd.password)
    console.log(passwordCheck)
    if (passwordCheck) {
      const data= {
        user:{
          email: sd.email
        }
      }
      const authToken = Jwt.sign(data, "bigbasket")

      res.status(201).send({ message: "login successfully", authToken: authToken })
    }
    else {
      res.send({ message: "wrong password" })
    }
  } catch (error) {
    res.send({ message: "wrong email" })
  }

})




app.get('/get-address/:email', async (req, res) => {
  const { email } = req.params
  try {
    const AddressData = await AddModel.findOne({ email: email })
    res.send(JSON.stringify(AddressData.Address))
  } catch (error) {

  }

})

app.post('/post-new-address/:email', async (req, res) => {
  const { email } = req.params
  const newAdd = req.body
  const Data =await AddModel.findOne({ email: email })
  console.log(Data)
  if (Data) 
  {
    Data.Address.push(req.body)
    try {
      Data.save()
      console.log(Data)
      res.send("addedd")
    } catch (error) {

    }
  }
  else{
   const AddDataNew = new AddModel({email:email,Address:[req.body]})
    await AddDataNew.save()
    res.send("addedd")
  }
  
})

app.get('/get-cart-items/:email', async (req, res) => {
  const Email = req.params
  console.log(Email)
  const Data = await CartModel.findOne({ email: Email.email })
  if(Data){
    res.send(Data.items)
  }
  else{
    
  }
})

app.post('/post-cart-items/:email', async (req, res) => {
  const { email } = req.params
  const Data = await CartModel.findOne({ email: email })

  if (Data) 
  {
    Data.items.push(req.body)
    try {
      Data.save()
      res.send("addedd")
    } catch (error) {

    }
  }
  else{
   const cartDataNew = new CartModel({email:email,items:[req.body]})
    await cartDataNew.save()
    res.send("addedd")
  }

})

app.delete('/delete-cart-items/:email/:id', async (req, res) => {
  const Email = req.params
  const Data = await CartModel.findOne({ email: Email.email })
  const NewCart = []
  Data.items.map((value) => {
    if (value.id !== Email.id) {
      NewCart.push(value)
    }
  })
  Data.items = [...NewCart]
  console.log(Data.items)
  Data.save()
  res.send('deleted')

})



app.post('/post-orders-items/:email', async (req, res) => {
  const { email } = req.params
  const Data = await OrdersModel.findOne({ email: email })

  if (Data) 
  {
    Data.items.push(req.body)
    try {
      Data.save()
      res.send("addedd")
    } catch (error) {

    }
  }
  else{
   const cartDataNew = new OrdersModel({email:email,items:[req.body]})
    await cartDataNew.save()
    res.send("addedd")
  }

})


app.get('/get-orders-items/:email', async (req, res) => {
  const Email = req.params
  const Data = await OrdersModel.findOne({ email: Email.email })
  if(Data){
    res.send(Data.items)
  }
  else{
    
  }
})




app.listen(4000, () => {

  console.log("server running 4000 port")
})