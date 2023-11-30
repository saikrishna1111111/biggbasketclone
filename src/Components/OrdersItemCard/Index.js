import React from 'react'
import './index.css'
import { TrashSimple } from 'phosphor-react'

const Index = () => {
  return (
    <div className="order-item-cont">
      <div className="item-img-cont">
        <img width={"100%"} height={"100%"} src={'https://t4.ftcdn.net/jpg/02/32/98/31/360_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg'} alt="Item" className="item-img" />
      </div>

      <div className="item-content">
        <h1 className="item-head">{"bagitem.productname"}</h1>
        <div className="item-details">
          <div className="item-quantity">
            <h3 className="quant">Quantity</h3>
            <button
              className="plus"
             // onClick={() => { setQuant(quant + 1) }}
            >
              +
            </button>
            {1}
            <button className="minus">-</button>
          </div>

          <div className="itemprice">
            <h3 className="item-price-head">Price:</h3>
            <div className="item-price">&#x20B9;{"bagitem.price"}</div>
          </div>

          <div
            className="delete"
            //onClick={() => removeBagSubmit(bagitem)}
          >
            {/* <TrashSimple size={32} color="#f15000" weight="fill" /> */}
            Status
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index