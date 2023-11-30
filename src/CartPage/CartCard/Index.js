import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './index.css'
import { TrashSimple } from 'phosphor-react'
const Index = ({CartProduct,RemoveCartProducts,LoadSet}) => {
    const [count,setCount]=React.useState(1)
    const [loading,setLoading] = useState(false)
    function Increment(){
      setCount(count+1)
    } 
    function Decrement(){
      if(count>1)
      {
        setCount(count-1)
      }
    }

    const LoginEmail = useSelector(state=>state.LoginStatus)

    const cartDataDelete =async(data)=>{
      LoadSet(true)
      await axios.delete(`http://localhost:4000/delete-cart-items/${LoginEmail}/${data.id}`)
      LoadSet(false)
    }

  return (
    <div style={{width:"70%",margin:"auto"}} className=" d-flex justify-content-between align-items-center px-5 py3-4 shadow p-3 mb-5 bg-body rounded">
      <div>
        <img
          src={CartProduct.image}
          className=" Card-image" 
          alt="cart Image" 
        />
      </div>
      <div>
        <p>
          {CartProduct.name}
        </p>
      </div>
      <div className=" d-flex">
        <button className='Card-buttons' onClick={Increment} >+</button>
        <button className='Card-buttons'>{count}</button>
        <button className='Card-buttons' onClick={Decrement} >-</button>
      </div>
      <div>
        <h5 className="mb-0">{count*CartProduct.price}</h5>
      </div>
      <div className="Cart-product-remove" onClick={()=>{cartDataDelete(CartProduct);RemoveCartProducts(CartProduct)}}>
      <TrashSimple size={32}  color="#a0cd4a" weight="fill"/>
      </div>
    </div>
  )
}
const mapStateToDispatch=(dispatch)=>{
  return {

      RemoveCartProducts:(s)=>{dispatch({type:"SUBB",payload:s})}
  }
}
export default connect(null,mapStateToDispatch)(Index)