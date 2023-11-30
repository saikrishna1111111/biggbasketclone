import React from 'react'
import { useNavigate } from 'react-router-dom';
import SnacksOffers from '../../Data/ProductsOffersData/SnacksOffers.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './index.css'
const Index = () => {
    const navigate = useNavigate();
    const toproducts=()=>
    {
        navigate('/products/snacks');
    }
  return (
    <div className='py-3'>
        <div className='text-center display-6 pb-3'>
            Snack Store
        </div>
        <div className='hstack  flex-wrap justify-content-center'>
            {
            SnacksOffers.map((SnacksOffer,index)=>
            <div key={index}>
                <LazyLoadImage className='snacks-offers' onClick={toproducts} src={SnacksOffer}  />
            </div>
            )}
      </div>
    </div>
  )
}
export default Index