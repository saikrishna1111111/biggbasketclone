import React from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css'
const Index = ({CartProducts}) => {
    const navigate = useNavigate();
    const tocarts=()=>{
        navigate('/carts');
    }
  return (
        <div className=' position-relative ' id={window.location.pathname=="/carts" ? 'active':null}>
            <h6 className='cart' onClick={tocarts} >
                Cart
            </h6>
            <div className="position-absolute px-2 CartLength">
                {CartProducts.length}
            </div>
        </div>
  )
}
const mapStateToProps=(state)=>{
    return {
        CartProducts:state.cartAllProducts
    }
  }
  export default connect(mapStateToProps,null)(Index)