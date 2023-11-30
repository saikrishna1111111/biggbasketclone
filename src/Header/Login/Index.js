import React from 'react'
import './index.css'
const Login = ({loginStatus}) => {
  return (
    <div className='position-absolute bg-light py-3 border login-container'>
        <div>
            <div className='h6 text-center'>
                Please Continue to Login
            </div>
        </div>
        <form className=' mx-auto   px-3'>
          <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" for="form2Example1">Email address</label>
          </div>
          <div className="form-outline mb-3">
            <input type="password" id="form2Example2" className="form-control" />
            <label className="form-label" for="form2Example2">Password</label>
          </div>
          <div className="row mb-3 d-flex">
            <button type="button" className="btn btn-primary btn-block mb-3">Sign in</button>
            <a href="#!" className='mb-4'>Forgot password?</a>
            <button type="button" className="btn btn-primary btn-block mb-3" onClick={loginStatus}>Cancel</button>
          </div>
          <div className="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div>
        </form>
    </div>
  )
}
export default Login