import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './index.css'
const Index = ({Orders}) => {
  const Email = useSelector((state)=>state.LoginStatus)
    const navigate=useNavigate()
    const onSubmit=async(values)=>
    {
      console.log("data",Email)
      Orders()
      const data = await axios.post(`http://localhost:4000/post-new-address/${Email}`,values)
      alert(data.data)
      
    }
    const initialValues ={
      FirstName:"",
      LastName:"",
      state:"",
      city:"",
      postalCode:"",
      address:"",
      country:"",
      number:""
    }
    const validate=(values)=>{
      const errors={}
      if(!values.FirstName){
        errors.FirstName="FirstName Required"
      }
      if(!values.LastName){
        errors.LastName="LastName Required"
      }
      if(!values.state){
        errors.state="State Required"
      }
      if(!values.city){
        errors.city="City Required"
      }
      if(!values.postalCode){
        errors.postalCode="Postal Code Required"
      }
      if(!values.address){
        errors.address="Address Required"
      }
      if(!values.country){
        errors.email="Country Required"
      }


      if (!values.number) {
        errors.number= "Please enter only numbers.";
      }
      return errors
    }

    const formik =useFormik({
      initialValues,
      validate,
      onSubmit
    })
  return (
  <div className="col-md-8 mb-4 form-container" style={{width:"65%",margin:" auto"}}>
    <div className="card">
      <div className="card-header py-3">
        <h5 className="mb-0">Biling details</h5>
      </div>
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-4">
            <div className="col">
              <div>
                <label className="form-label" >First name <span>*</span></label>
                <input type="text" name='FirstName' value={formik.values.FirstName}  onChange={formik.handleChange} className="form-control" />
                {formik.errors.FirstName?<span>FirstName Required</span>:null}
              </div>
            </div>
            <div className="col">
              <div>
              <label className="form-label" >Last name <span>*</span></label>
                <input typeName="text" name='LastName' value={formik.values.LastName} onChange={formik.handleChange} className="form-control" />
                {formik.errors.LastName?<span>{formik.errors.LastName}</span>:null}
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div>
                <label className="form-label" >State <span>*</span></label>
                <input type="text" name='state' value={formik.values.state} onChange={formik.handleChange} className="form-control" />
                {formik.errors.state?<span>{formik.errors.state}</span>:null}
              </div>
            </div>
            <div className="col">
              <div>
              <label className="form-label" >City <span>*</span></label>
                <input typeName="text" name='city' value={formik.values.city} onChange={formik.handleChange} className="form-control" />
                {formik.errors.city?<span>{formik.errors.city}</span>:null}
              </div>
            </div>
            <div className="col">
              <div>
              <label className="form-label" >postalCode <span>*</span></label>
                <input typeName="text" name='postalCode' value={formik.values.postalCode} onChange={formik.handleChange} className="form-control" />
                {formik.errors.postalCode?<span>{formik.errors.postalCode}</span>:null}
              </div>
            </div>
          </div>
          <div className=" mb-4">
          <label className="form-label" >Address <span>*</span></label>
            <input type="text" name='address' value={formik.values.address} onChange={formik.handleChange} className="form-control" />
            {formik.errors.address?<span>{formik.errors.address}</span>:null}
          </div>
          <div className=" mb-4">
          <label className="form-label" >Country <span>*</span></label>
            <input type="text" name='country' value={formik.values.country} onChange={formik.handleChange} className="form-control" />
            {formik.errors.country?<span>{formik.errors.country}</span>:null}

          </div>
          <div className=" mb-4">
          <label className="form-label" >Phone Number <span>*</span></label>
            <input type="number" name='number' value={formik.values.number} onChange={formik.handleChange} className="form-control" />
            {formik.errors.number?<span>{formik.errors.number}</span>:null}
          </div>
          <div>
            <input type="submit" className="btn btn-dark form-submit"/>
          </div>
        </form>
      </div>
    </div>
  </div> 
  )
}
const mapStateToDispatch=(dispatch)=>{
  return {

      Orders:(s)=>{dispatch({type:"ALL_Delete",payload:s})}
  }
}
export default connect(null,mapStateToDispatch)(Index)