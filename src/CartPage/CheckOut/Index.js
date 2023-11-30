import React from 'react'
import { Link } from 'react-router-dom'
import Total from '../Total/Index'
const Index = ({CartProducts}) => {
  return (
    <div>
        <div className='text-center'>
        {(CartProducts.length)?
        <Link to="/address">
              <button type="button" className="btn btn-secondary border mx-5 my-5">
                  Check out <Total />
              </button>
        </Link>:
        <div>
            <p className='my-5 mx-auto display-6 text-center'>
                Add items to the cart
            </p>
            <Link to="/">
            <button type="button" className="btn border mx-5">
                Go to Home
            </button>
            </Link>
        </div>
        }
      </div>
    </div>
  )
}
export default Index