import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './index.css'
import { useNavigate } from 'react-router-dom';
const Index = () => {
  const navigate = useNavigate()
  return (
    <>
        <LazyLoadImage 
            className='Logo-image' 
            effect='blur'  
            src='https://tse3.mm.bing.net/th/id/OIP.Du4i2sDa7a_EZydQhnWrAgAAAA?pid=ImgDet&rs=1' 
            alt='logo image' 
            onClick={()=>{navigate("/")}}  
            
        />
</>
  )
}

export default Index