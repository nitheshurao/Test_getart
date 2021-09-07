import React, { useState } from 'react'
import './Navbar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from './Cart';
import { Link } from "react-router-dom"


const Navbar = (props) => {
    // const [sidecart, setSidecart] = useState(false);

    const showSidebar = () => props.setSidecart(!props.sidecart);
    console.log(props.sidecart)
    return (
        <div>
            <div className="n_hed">
                <h2>header

                </h2>
                <s><ShoppingCartIcon onClick={showSidebar} /> </s>
                {/* <Cart /> */}


            </div>
            <Link to="/panel"><h5>Panel</h5></Link>
            <Link to="/d"><h5>PageDetails</h5></Link>
            <Link to="/page"><h5>Page</h5></Link>
            <Link to="/Pages"><h5>Pages</h5></Link>
            <Link to="/c"><h5>Cart</h5></Link>

        </div>


    )
}

export default Navbar
