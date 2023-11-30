import React from 'react'
import { useNavigate } from 'react-router-dom'
import Offers from '../../Data/ProductsOffersData/VegetablesAndFruitsOffers.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import  './index.css'
const Index = () => {
    const navigate = useNavigate();
    const toproducts=(a)=>
    {
          navigate(`/products/${a}`);
    }
  return (
    <div>
        <div className='text-center mt-3 display-6 pb-3'>
            Vegetables and Fruits
        </div>
        <div className='hstack gap={5} flex-wrap justify-content-center'>
            {Offers.map((Offer,i)=><div key={i}>
            <LazyLoadImage 
                className='Vegetables-Fruits-Image' 
                src={Offer} 
                onClick={(i<=2)?()=>{toproducts("vegetables")}:()=>{toproducts("fruits")}}
             />
        </div>
            )}
        </div>
    </div>
  )
}
export default Index