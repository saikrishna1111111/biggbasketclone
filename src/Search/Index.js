import React from 'react'
import Fruits from '../Data/ProductsData/FruitsData.json'
import Snacks from '../Data/ProductsData/SnacksData.json'
import Bevegers from '../Data/ProductsData/BevegersData.json'
import Vegetables from '../Data/ProductsData/VegetablesData.json'
import { useLocation } from 'react-router-dom'
import Search from './SearchProducts/Index'
const Index = () => {
    const { state } = useLocation();
    let SearchValue=state
  return (
    <div className='d-flex justify-content-center flex-wrap'>
        {SearchValue && <Search Products={Vegetables}  SearchValue={SearchValue} />}
        {SearchValue && <Search Products={Fruits}  SearchValue={SearchValue} />}
       {SearchValue && <Search Products={Bevegers}  SearchValue={SearchValue} />}
       {SearchValue &&  <Search Products={Snacks}  SearchValue={SearchValue} />}
    </div>
  )
}

export default Index