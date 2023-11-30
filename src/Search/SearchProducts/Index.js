import React from 'react'
import ProductCard from '../../ProductsPage/ProductCard/Index'
const Index = ({Products,SearchValue}) => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
        {
            Products.map((product,i1)=>
            <div key={i1}>
               {product.name.toLowerCase().includes(SearchValue.toLowerCase())?
               <div>
                <ProductCard product={product}/>
               </div>
               :null}
            </div>)
        }
    </div>
  )
}

export default Index