import React from 'react'
import './index.css'
const index = ({onMouse,outMouse}) => {
  return (
    <div className='d-flex category-container'>
        <div className='category' onMouseOver={onMouse} onMouseOut={outMouse}>
            SHOP BY CATEGORY  
        </div>
    </div>
  )
}
export default index