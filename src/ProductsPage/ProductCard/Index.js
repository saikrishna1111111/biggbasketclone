import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AddToCart from '../AddToCart/Index';
import Discount from '../Discount/Index'
import { useSelector } from 'react-redux';
import './card.css'
const Index = ({product,LoadSet}) => {

  return (
          <div className="card-container">
            <LazyLoadImage 
                className="card-image" 
                src={product.image} 
                alt="Card image cap" 
            />
            <div className="card-body">
              <div className="card-title">{product.name} ({product.quan})
                <Discount product={product} />
                <div className="card-title">
                    Available :  Rs 
                    <div className='price '>
                        {product.price} 
                    </div>
                </div>
                <AddToCart product={product} LoadSet={LoadSet}/>
              </div>
            </div>
          </div>
  )
}
export default Index