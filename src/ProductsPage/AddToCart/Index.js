import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./index.css"
const Index = ({AddToCart,product,LoadSet}) => {
    const cartsData = useSelector((state)=>state.cartAllProducts)
    const navigate = useNavigate()
    const LoginStatus = useSelector((state)=>state.LoginStatus)
    const [but,setBut]=React.useState(1)
    const cartDataPost =async(data)=>{
        LoadSet(true)
        const cartPost = await axios.post(`http://localhost:4000/post-cart-items/${LoginStatus}`,data)
        LoadSet(false)
      }
    const Cart =()=>{
        if(LoginStatus){
            AddToCart(product);
            cartDataPost(product);
            setBut(0)
            
        }
        else
        {
            navigate("/login")
        }
        
    }


    
  return (
    <>
        <button className="btn" >
            {but?
                <div onClick={()=>{Cart()}}>
                    Add to cart
                </div>:
                <div >
                    Added
                </div>}
        </button>
    </>
  )
}
const mapStateToDispatch=(dispatch)=>{
    return {
        AddToCart:(Cartvalue)=>{dispatch({type:"ADD",payload:Cartvalue})}
    }
}
export default connect(null,mapStateToDispatch)(Index)