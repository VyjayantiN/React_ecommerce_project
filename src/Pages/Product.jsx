import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Product = () => {
  const { all_products } = useContext(ShopContext)
  const { productID } = useParams(); // Corrected from 'productId' to 'productID'
  const product = all_products.find((e) => e.id === Number(productID));
  
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
