import React from 'react'
import BrevOffers from './BeveragesOffers/Index'
import Offers from './SpecialOffers/Index'
import SnackOffers from './SnacksOffers.js/Index'
import VegetablesAndFruitsOffers from './VegetablesAndFruitsOffers/Index'
const Home = () => {
  return (
    <>
        <Offers />
        <VegetablesAndFruitsOffers />
        <BrevOffers />
        <SnackOffers />
    </>
  )
}

export default Home