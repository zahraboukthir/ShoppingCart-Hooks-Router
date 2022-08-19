import React from 'react'
import {useParams}from 'react-router-dom'
const ProductDetails = ({list}) => {
  const {idprod} =useParams()
  const pd=list.find(
    (el)=>el.id==idprod
  )
  console.log(pd)
  return (
    <div className='container'>
      {pd.title}
      <img src={pd.img} alt=""/>
      {pd.price}
      {pd.qte}
    </div>
  )
}

export default ProductDetails