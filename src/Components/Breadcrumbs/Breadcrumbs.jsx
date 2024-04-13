import React from 'react'
import './Breadcrumbs.css'
import arrow from '../Assets/breadcrum_arrow.png'
const Breadcrumbs = (props) => {
    const {product}= props;
  return (
    <div className='Breadcrumb'>
      Home <img src={arrow}/> SHOP <img src={arrow}/> {product.category} <img src={arrow}/> {product.name} 
    </div>
  )
}

export default Breadcrumbs
