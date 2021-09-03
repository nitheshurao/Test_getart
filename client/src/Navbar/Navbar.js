import React, { useState } from 'react'
import './Navbar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from './Cart';


const Navbar = (props) => {
    // const [sidecart, setSidecart] = useState(false);

    const showSidebar = () => props.setSidecart(!props.sidecart);
    console.log(props.sidecart)
    return (
        <div className="n_hed">
            <h2>header

            </h2>
            <s><ShoppingCartIcon onClick={showSidebar} /> </s>
            {/* <Cart /> */}


        </div>

    )
}

export default Navbar
