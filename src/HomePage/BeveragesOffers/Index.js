import React from 'react'
import { useNavigate } from 'react-router-dom'
import BevegersOffers from '../../Data/ProductsOffersData/BevegersOffers.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './index.css'

const Index = () => {
    const navigate = useNavigate();
    const toproducts=()=>
    {
        navigate('/products/brevegers');
    }
  return (
    <div>
      
        <div className='text-center mt-3 display-6 p-3'>
            Beverages
        </div>
        <div className='hstack flex-wrap justify-content-center'>
            {BevegersOffers.map((BeveragesOffer,index)=>
            <div key={index}>
                <LazyLoadImage className='Beverages-images'  onClick={toproducts} src={BeveragesOffer}  alt="Beverages Offer image"/>
            </div>
          )}
        </div>
    </div>
  )
}



export default Index