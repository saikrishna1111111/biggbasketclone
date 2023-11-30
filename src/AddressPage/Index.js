import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Index = () => {
    const Email = useSelector((state)=>state.LoginStatus)
    const [address, setAddress] = useState([])
    const navigate = useNavigate()
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:4000/get-address/${Email}`)
        .then((res) => { setAddress([...res.data]) })
   
        
        .catch((err) => { console.log(err) })
    }, [])
   
   
    function onChange(i) {
        setSelected((prev) => (i === prev ? null : i));
      }
      console.log(address[selected])

    return (
        <div style={{}}>
            {
                address.map((address1,i)=>
                <div style={{ width: "70%", margin: "20px auto" }}>
                <div className="shadow p-3 mb-5 bg-body rounded"  onChange={() => onChange(i)}>
                    <div style={{display:"flex",cursor:"pointer"}} >
                        <input type='checkbox' style={{margin:"10px", padding:"5px"}} checked={i === selected} />
                        <p style={{margin:"10px", padding:"5px"}}>
                        {address1.FirstName +" "+address1.LastName + ", " + address1.address+ ", " +address1.city+ ", " + address1.state+ ", " + address1.country+ ", " + address1.postalCode +","+ address1.number}
                        </p>
                    </div>
                </div>
            </div>)
            }
            <div style={{ display: 'flex', gap: "50px", justifyContent: "center" }}>
                <button onClick={() => { navigate("/add-new-address") }} type="button" className="btn btn-primary btn-lg">Add New Address</button>
                <button disabled={address.length==0 ? true :false} onClick={() => {navigate("/deleverd") }} type="button" className="btn btn-primary btn-lg">Conform Order</button>
            </div>
        </div>
    )
}

export default Index