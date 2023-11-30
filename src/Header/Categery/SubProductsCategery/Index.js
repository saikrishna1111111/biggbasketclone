import React, { useState } from 'react'
import ROW_2 from '../../../Data/CategeryData/Row2.json'
import './index.css'
const Index = ({row1,increment2}) => {
    const [hover,setHover]=useState(1)
  return (
    <div>
        <div className='row2-container'   >
            {ROW_2.map((r21,i)=>(row1===i+1)? 
                <div key={i}>{ 
                    r21.map((r31,i1)=>
                    <div key={i1} id="r1" className={(hover==i1+1)?"b1":null}  onMouseOver={()=>{increment2(i1+1); setHover(i1+1)}}>
                        {r31}
                    </div>)
                }
                </div>:null)}
        </div>
    </div>
    
  )
}

export default Index