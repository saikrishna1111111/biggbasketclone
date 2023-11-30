import React from 'react'
import SpecialOffers from '../../Data/ProductsOffersData/SpecialOffers.json'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Index = () => {
  var settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows:true,
    slidesToScroll: 1
  };
    const [index,setIndex]=React.useState(0)
    setInterval(()=>{
        (Index<SpecialOffers.length-1)?setIndex(index+1):setIndex(0)
    },2000)
  return (
    <div >
        <Slider {...settings}>
      {
        SpecialOffers.map((value,index)=>
        <div key={index}>
         <img  className='SpecialOffers-image' src={value} alt="SpecialOffer-image"/>
        </div>
        )
      }
    </Slider>
    </div>
  )
}
export default Index