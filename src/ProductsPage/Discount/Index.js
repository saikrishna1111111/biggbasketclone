import React from 'react'

const Index = ({product}) => {
    const [discount,setDiscount]=React.useState(Math.floor(Math.random() * (40 - 15) + 15))

  return (
   
    <div style={{color:'rgb(118, 114, 114)', display:"flex", justifyContent:"center", alignItems:"center"}}>M.R.P  
        <div className='px-2' style={{textDecoration:"line-through"}}>
            Rs {parseInt(product.price+((product.price/discount)*100))}
        </div>
    </div>
 
  )
}

export default Index