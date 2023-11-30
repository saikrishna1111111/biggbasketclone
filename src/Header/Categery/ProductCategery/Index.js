import { useState } from "react"
import ROW_1 from '../../../Data/CategeryData/Row1.json'
import { useNavigate } from "react-router-dom"
import './index.css'
const Index = ({row1,increment1}) => {
  const [hover,setHover]=useState(1)
  const navigate = useNavigate();
    const toproducts=(a)=>
    {
          navigate(`/products/${a}`);
    }
  return (
    <div >
        <div className="row1-container" onMouseOut={()=>{setHover(row1)}}  onMouseOver={()=>{setHover(null)}}>
            {ROW_1.map((row1,i)=>
              <div
                  key={i} id="r1" 
                  className={(hover===(i+1))?"b1":null}  
                  onMouseOver={()=>{increment1(i+1)}} 
                  onClick={()=>{toproducts(row1)}}
              >
                {row1}
              </div>
            )}
        </div>

        
    </div>
  )
}

export default Index