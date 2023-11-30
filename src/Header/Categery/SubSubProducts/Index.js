import React from 'react'
import ROW3 from '../../../Data/CategeryData/Row3.json'
import './index.css'
const Index = ({row1,row2}) => {
  return (
    <div className='row3-container' >
        {
            ROW3.map((row31,i1)=>(row1===(i1+1)?
            <div key={i1}>
                {
                    row31.map((row32,i2)=>(row2===(i2+1))?
                    <div key={i2}>
                        {row32.map((row3,i3)=>
                            <div key={i3} id="r1" className='b11'>
                                {row3}
                            </div>)}
                    </div>
                    :null
                    )
                }
            </div>:
            null))
        }
    </div>
  )
}

export default Index