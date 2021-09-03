import React from 'react'
import './Cart.css'
import '../Page/PageDetails/PageDetails.css'

const Cart = () => {
    return (
        <div className="cart roaw">
          
            <div class="row">





                <div class="col-6 col-s-12 ">

                    <div class="asidess">
                        <div className="ca-img co-s-i co-i ">
                            <img className="co-s-i " src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" />


                        </div>

                    </div>

                </div>

                <div class="col-6 col-s-12">
                    <div class="asidse">
                        <h>stock</h>

                        <h>price </h>

                        <div className="de-img-op">

                            {/* <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" /> */}
                            <h>price </h>
                        </div>
                        <div className="de-btn-op1">
                            <button> +1</button>
                            <button>  -1</button>

                        </div>
                    </div>

                </div>



            </div>

        </div>




    )
}

export default Cart
