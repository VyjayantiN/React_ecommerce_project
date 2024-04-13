import React , {useState} from 'react'
import './Navbar.css'
import { useContext} from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
        <ul className="Navbar-menu">
          <li onClick={() => setMenu("shop")}>
            <Link to="/" style={{textDecoration:"none"}}>Shop</Link>
            {menu=="shop" ?<hr/> : <></>}</li>
          <li onClick={() => setMenu("mens")}> <Link to="/mens" style={{textDecoration:"none"}}>Men</Link> {menu=="mens" ?<hr/> : <></>}</li>
          <li onClick={() => setMenu("womans")}><Link to="/womens" style={{textDecoration:"none"}}>Woman</Link>{menu=="womans" ?<hr/> : <></>}</li>
          <li onClick={() => setMenu("kids")}><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link>{menu=="kids" ?<hr/> : <></>}</li>
        </ul>
      <div className="nav-login-cart">

      <Link to="/cart" style={{textDecoration:"none"}}> <img src={cart_icon} alt="cart" />
       </Link>
       <div class="nav-cart-count">{getTotalCartItems()}</div>
      <Link to="/login" style={{textDecoration:"none"}} > <button class="login-button">Login</button></Link>
      </div>
    </div>
  )
}

export default Navbar
