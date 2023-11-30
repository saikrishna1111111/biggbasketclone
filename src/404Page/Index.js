import React from 'react'
import { useNavigate } from 'react-router-dom'
const Index = () => {
    const navigate = useNavigate()
    return (
        <div className='page-404'>

            <div style={{ textAlign: "center" }}>
                <img src='https://www.bbassets.com/static/images/404pan.png' width={"15%"} height={"15%"} />
                <h3>This page doesn't exist.</h3><br />
                <span>Looks like you entered a page which doesn’t exist anymore.

                    Let’s take you back to home.</span><br />
                    <div className='category' onClick={()=>{navigate("/")}} style={{width:"250px",margin:"20px auto"}} >
            GoTo Home
        </div>

            </div>
        </div>
    )
}

export default Index