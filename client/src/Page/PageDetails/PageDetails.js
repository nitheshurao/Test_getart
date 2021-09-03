import React from 'react'
import Cart from '../../Navbar/Cart'
import Carts from './Carts'

import './PageDetails.css'
const PageDetails = (props) => {
    console.log(props.sidecart)

    return (
        <div className="det">


            <div class="row">


                <div className=''>
                    {/* {props.sidecart ? "cart active" : ''}> */}
                    {/* // {props.sidecart ? 'col-3 ' : ''}> */}



                    <div class="col-6 col-s-12 ">

                        <div class="asides">
                            <div className="de-img co-s-i co-i ">
                                <img className="co-s-i " src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" />

                                {/* <div className="cart">

                                </div> */}
                            </div>

                        </div>

                    </div>
                    {/* >???? */}


                    <div class="col-6 col-s-12">
                        {props.sidecart ? <Carts />
                            :
                            <div class="asidse">
                                <h>stock</h>
                                <h3>Heading</h3>
                                <h>price </h>
                                <p>wkjbfwlkj lkjqwnflwj jwenfdje jhefdjwqpi jqwediwj jfikjenf wefn wef qwnrf; wklqfn onfwo wknfwreoinf qwnfow wnfopij
                                    wkjbfwlkj lkjqwnflwj jwenfdje jhefdjwqpi jqwediwj jfikjenf wefn wef qwnrf; wklqfn onfwo wknfwreoinf qwnfow wnfopij

                                    wkjbfwlkj lkjqwnflwj jwenfdje jhefdjwqpi jqwediwj jfikjenf

                                </p>
                                <div className="de-img-op">
                                    <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" />
                                    <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" />
                                    <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" />

                                </div>
                                <div className="de-btn-op">
                                    <button>Add To Cart </button>
                                    <button> By It Now</button>

                                </div>
                            </div>}


                    </div>






                </div>

            </div>



        </div >
    )
}

export default PageDetails
