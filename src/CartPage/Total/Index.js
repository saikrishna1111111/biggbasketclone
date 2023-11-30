import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Index = () => {
    const cart= useSelector(state=>state.cartAllProducts)
    const [total,setTotal] = useState(0)
    useEffect(()=>{ 
        var p  = 0
        cart.map((value,index)=>{
            p = p+Number(value.price)
        })
         setTotal(p)
    },[cart])

  return (
    <div>
        {total}
    </div>
  )
}

export default Index