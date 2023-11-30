import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Index = ({ data, serverOtp }) => {
    const navigate = useNavigate()
    console.log(data,"data")
    const createUser = async (data) => {
        let otp = "";
        for (let x in userOtp) {
            otp += userOtp[x];
        }
        if(serverOtp==otp){
            const newUser = await axios.post('http://localhost:4000/add-user', data)
            console.log(newUser.data);
            navigate("/login")
            return newUser.data
        }
        else{
            alert("wrong otp")
        }
    }
    const [userOtp, setUserOtp] = useState({ o1: "", o2: "", o3: "", o4: "", o5: "", o6: "" })
    const handleChange = (e) => {
        setUserOtp({ ...userOtp, [e.target.name]: e.target.value })
    }
    return (
        <div className="container height-100 d-flex justify-content-center align-items-center">
            <div className="position-relative">
                <div className="card1 card p-2 text-center">
                    <h6>Please enter the one time password <br /> to verify your account</h6>
                    <div> <span>A code has been sent to your mail </span> </div>
                    <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                        <input name={"o1"} value={userOtp.o1} onChange={handleChange} className="m-2 text-center form-control rounded" type="text" id="first" maxLength="1" />
                        <input name={"o2"} value={userOtp.o2} onChange={handleChange} className="m-2 text-center form-control rounded" type="text" id="second" maxLength="1" />
                        <input name={"o3"} value={userOtp.o3} onChange={handleChange} className="m-2 text-center form-control rounded" type="text" id="third" maxLength="1" />
                        <input name={"o4"} value={userOtp.o4} onChange={handleChange} className="m-2 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
                        <input name={"o5"} value={userOtp.o5} onChange={handleChange} className="m-2 text-center form-control rounded" type="text" id="fifth" maxLength="1" />
                        <input name={"o6"} value={userOtp.o6} onChange={handleChange} className="m-2 text-center form-control rounded" type="text" id="sixth" maxLength="1" />
                    </div>
                    <div className="mt-4"> <button className="btn btn-danger px-4 validate" onClick={()=>{createUser(data)}}>Validate</button> </div>
                </div>
            </div>
        </div>
    )
}

export default Index