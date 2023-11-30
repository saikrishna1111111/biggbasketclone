import React, { useState } from 'react'
import './index.css'
import Row1 from './ProductCategery/Index'
import Row2 from './SubProductsCategery/Index'
import Row3 from './SubSubProducts/Index'
const Index = ({inc,dec}) => {
    const [row1,setRow1]=useState(1)
    function increment1(i){
        setRow1(i)
    }
    let [row2,setRow2]=useState(1)
    function increment2(i){
        setRow2(i)
    }
  return (
    <div>
        <div className='hover-container' onMouseOver={inc} onMouseOut={dec}>
            <div className='hover-row'>
            <Row1 row1={row1} increment1={increment1} increment2={increment2}/>
            </div>
            <div className='hover-row'>
            <Row2 row1={row1} row2={row2} increment2={increment2}/>
            </div>  
            <div className='hover-row'>
            <Row3 row1={row1} row2={row2}/>
            </div>
        </div>
    </div>
  )
}
export default Index