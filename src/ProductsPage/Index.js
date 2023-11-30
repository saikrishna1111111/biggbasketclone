import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductCard from './ProductCard/Index';
const Index = ({AllProducts,AddToProducts}) => {
    const [loading,setLoading] = useState(false)
    const {items} = useParams()
    useEffect(()=>{
        AddToProducts(items)
    },[items])

    function LoadSet(value){
        setLoading(value)
      }


  return (
    <div>
        <div className='text-center mt-3 display-6'>
            {items}
        </div>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center",width:"100%", margin:"auto"}}>
            {AllProducts.map((product,index)=>
            <div key={index} style={{margin:"30px", width:"250px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", boxShadow:"5px 5px 5px 5px rgb(212, 209, 209)", marginBlock:"20px", padding:"20px"}}>
                <ProductCard LoadSet={LoadSet} product={product} />
            </div>
            )}
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return {
        AllProducts:state.products
    }
}
const mapStateToDispatch=(dispatch)=>{
    return {
        AddToProducts:(value)=>{dispatch({type:value})}

    }
}
export default connect(mapStateToProps,mapStateToDispatch)(Index)