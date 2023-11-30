import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import axios from 'axios';
import Confetti from 'react-confetti'
import OTP from '../Components/Otp/Index'
import Loading from '../Components/Loading/Index'

const Register = () => {
    const [serverOtp, setServerOtp] = useState("")
    const [userData, setUserData] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const userPost = async (data) => {
        if (data.password == data.rePassword) {
            console.log(data, "-")
            setLoading(true)
            setUserData(data)
            const newUser = await axios.post('http://localhost:4000/send-email', { email: data.email })
            console.log(newUser)
            setServerOtp(newUser.data);
            setLoading(false)
            setOtp(true)
        }
        else{
            console.log("passwords does not match")
        }


    }

    const navigate = useNavigate()

    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = "Email Required"
            
        }

        return errors

    }
    const initialValues = {
        email: "",
        password: "",
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rePassword: ""
        },
        validate,
        onSubmit: userPost
    })

    const [otp, setOtp] = useState(false)
    if (loading) {
        return <Loading />
    }
    return (
        <>
            {/* <Confetti /> */}
            {otp ? <OTP data={{email:userData.email,password:userData.password}} serverOtp={serverOtp} /> :
                <div className='form'>
                    <form onSubmit={formik.handleSubmit}>
                        <h3>Register form</h3>
                        <div className='form-container'>
                            <label htmlFor='email'>Email <span>*</span></label>
                            <input id='email' type='text' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} />
                        </div>
                        <div className='form-container'>
                            <label htmlFor='password'>password <span>*</span></label>
                            <input id='password' type='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} />
                        </div>
                        <div className='form-container'>
                            <label htmlFor='password'>Re-password <span>*</span></label>
                            <input id='rePassword' type='password' placeholder='re Password' value={formik.values.rePassword} onChange={formik.handleChange} />
                        </div>
                        <div className='form-container'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}
                                onClick={() => { navigate("/login") }}>
                                <button>do have account ? click here</button>
                            </div>
                        </div>
                        <div className='form-container'>
                            <input type='submit' />
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default Register