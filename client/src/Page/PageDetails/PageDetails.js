import React from 'react'
import Cart from '../../Navbar/Cart'
import Carts from './Carts'

import './PageDetails.css'
const PageDetails = (props) => {
    console.log(props)
    console.log(props.sidecart)
    const { _id, title, file, file1, file2, description, detail } = props.location.state.post
    return (
        <div className="det">


            <div class="row">


                <div className=''>
                    {/* {props.sidecart ? "cart active" : ''}> */}
                    {/* // {props.sidecart ? 'col-3 ' : ''}> */}



                    <div class="col-6 col-s-12 ">

                        <div class="asides">
                            <div className="de-img co-s-i co-i ">
                                <img className="co-s-i "
                                    src={file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />






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
                                <h>stock {title}</h>
                                <h3>{detail}</h3>
                                <h>price </h>
                                <p>{description}

                                </p>
                                <div className="de-img-op">
                                    <img src={file1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
                                    <img src={file2 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
                                    <img src={file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />

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
