import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartIcon from './CartIcon/Index'
import Gravatar from 'react-gravatar'


import './index.css'
import { useSelector, useDispatch } from 'react-redux'
const Index = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const LoginStatus = useSelector((state) => state.LoginStatus)
  return (
    <div className='d-flex Navigations-container' style={{ alignItems: "center" }}>
      <h6 className='cursor' id={window.location.pathname == "/" ? 'active' : null} onClick={() => { navigate("/") }}>
        Home
      </h6>
      {!LoginStatus && <h6 className='cursor' id={window.location.pathname == "/login" ? 'active' : null} onClick={() => { navigate("/login") }}>
        Login
      </h6>}
      <h6 className='cursor' id={window.location.pathname == "/about-us" ? 'active' : null} onClick={() => { navigate("/about-us") }}>
        About Us
      </h6>
      <h6 className='cursor' id={window.location.pathname == "/contact-us" ? 'active' : null} onClick={() => { navigate("/contact-us") }}>
        Contact Us
      </h6>
      {LoginStatus &&
        <div>
          <div type="button" className='bb-profile'  data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "30px", height: "30px", borderRadius: "50%" }}>
            <Gravatar email={LoginStatus} default='mp' />
          </div>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><button className="dropdown-item" type="button"  onClick={()=>{navigate("/your-orders")}}>Orders</button></li>
            <li><button className="dropdown-item" type="button" onClick={()=>{dispatch({type:"logout"})}} >LogOut</button></li>
          </ul>
        </div>
      }
   {LoginStatus && <CartIcon />}


    </div>
  )
}

export default Index