import React ,{useContext} from 'react'
import './ProductDisplay.css'
import star_dull from '../Assets/star_dull_icon.png'
import star_icon from '../Assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
    const {removeFromCart} = useContext(ShopContext)

  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
        <img src={product.image} alt="img" className='productDisplay-main-img' />
        </div>
        </div>
        <div className="productdisplay-right">
            <h2>{product.name}</h2>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>

            <div className="productdisplay-right-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic 
                reprehenderit voluptatem sed fuga tempora consectetur? Optio r
                epellat beatae blanditiis voluptatibus et debitis, sunt repellendus 
                deleniti, quam
                 iure perspiciatis natus! Nobis.
            </div>

            <div className="productdisplay-right-size">
            <h3>Select Size</h3>
            <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XX1</div>
            </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category' ><span>Category : </span>Women , T-shirt , Croptop</p>
            <p className='productdisplay-right-category' ><span>Category : </span>Modern , Latest</p>

        </div>
</div>
  )
}

export default ProductDisplay
