import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './search.css'
import { MagnifyingGlass } from 'phosphor-react'
const Index = () => {
    const [value,setValue]=useState("")
    const navigate = useNavigate();
  return (
    <div className='search-container'>
        <input className='search-input' placeholder="search products..." onChange={event => setValue(event.target.value)}/>

        <MagnifyingGlass  size={25}  />
    </div> 
  )
}
export default Index