import React, { useState } from 'react'
import Hover from './Categery/index'
import Login from './Login/Index'
import SearchBar  from '../Header/SearchBar/Index'
import LogoImage from '../Header/LogoImage/Index'
import LeftSideNavbars from './LeftSideNavbars/index'
import RightSideNavbars from './RightSideNavbars/Index'
import { useEffect } from 'react'
import './index.css'

const Header = () => {
    const [login,setLogin]=useState(0)
    const [hover,setHover]=useState(0)
    useEffect(  () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },[]);
  return (
    <div className='sticky-top' >
        <div className='Nav-container'>
            <nav className="navbar navbar-light bg-light nav-class">
              <div className='Navigations'>
                  <LogoImage />
                  <div className='d-flex px-2'>
                    <LeftSideNavbars onMouse={()=>{setHover(1)}} outMouse={()=>{setHover(0)}}/>
                    <SearchBar />
                  </div>
              </div>
              <div>
                <RightSideNavbars LoginStatus={()=>{setLogin(1)}}/>
              </div>
            </nav>
            {(hover==1)?<Hover inc={()=>{setHover(1)}} dec={()=>{setHover(0)}}/>:null}  
        </div>
    </div>  
  )
}
export default Header