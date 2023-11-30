import React, { useState } from 'react'
import { connect } from 'react-redux'
import CartCard from './CartCard/Index'
import Checkout from './CheckOut/Index'
import Loading from '../Components/Loading/Index'
const Index = ({ CartProducts }) => {
  const [loading, setLoading] = useState(false)
  function LoadSet(value) {
    setLoading(value)
  }
  if (loading) {
    return <><Loading /></>
  }
  return (
    <>
    {/* <div style={{width:"70%",margin:"auto",padding:"10px 0px",border:"1px solid red"}}>
      <h3>Cart</h3>
    </div> */}
      <div>
        {
          CartProducts.map((CartProduct, index) =>
            <div key={index}>
              <CartCard CartProduct={CartProduct} LoadSet={LoadSet} />
            </div>)
        }
        <Checkout CartProducts={CartProducts} />
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    CartProducts: state.cartAllProducts
  }
}
export default connect(mapStateToProps, null)(Index)