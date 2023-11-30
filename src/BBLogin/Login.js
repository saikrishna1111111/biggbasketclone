import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Toast from '../Toasts/Index' 
import  Loading from '../Components/Loading/Index'
import {  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault();
        const newUser = await axios.post('http://localhost:4000/user-login-check', credentials)
        console.log(newUser.data)
       
        if (newUser.data.message == "login successfully") {

            dispatch({ type: "sucessfull", payload: credentials.email })
            navigate("/")
        }
        setLoading(false)
        return newUser.data
    }
    return (
        <>
            {!loading ?
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <h3>Login form</h3>
                        <div className='form-container'>
                            <label htmlFor='email'>Email <span>*</span></label>
                            <input id='email' type='text' placeholder='Email' value={credentials.email} onChange={(e) => { setCredentials({ ...credentials, email: e.target.value }) }} />
                        </div>
                        <div className='form-container'>
                            <label htmlFor='password'>password <span>*</span></label>
                            <input id='password' value={credentials.password} type='password' placeholder='Password' onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }} />
                        </div>
                        <div className='form-container'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}

                            >
                                <button onClick={() => { navigate("/register") }}>don't have account ? click here</button>
                                <button>Forogt password ?</button>
                            </div>
                        </div>
                        <div className='form-container'>
                            <input type='submit' />
                        </div>
                    </form>

                </div> : <Loading />
            }
        </>
    )
}

export default Login