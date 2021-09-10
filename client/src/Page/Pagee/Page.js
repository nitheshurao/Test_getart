import React from 'react'
import './Page.css';
import { CardMedia } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
const Page = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();


    console.log(post)
    const { _id, title } = post;
    return (
        <div className="head">

            <div className="h-de"> <h1>{title} ajbsdcjlsj</h1>

                <Link
                    to={{ pathname: `/product/${_id}`, state: { post: post } }}
                >
                    <button className="btn">  <MoreHorizIcon fontSize="default" /></button>


                </Link>
            </div>


            <Link
                to={{ pathname: `/product/${_id}`, state: { post: post } }}
            >
                <div className="image">
                    {/* <CardMedia image={post.file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} /> */}\     <img src={post.file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />

                </div>
            </Link>
            <div className="h-de-2"> <h>page</h><h>pagedksncldjcwdjc wjdnfcwi dcjnwoduc jwdncowiu jwndoiuc ijqwnd oicuhw qw d no uicq wef ih  ncldjcwdjc wjdnfcwi dcjnwoduc jwdncowiu jwndoiuc ijqwnd oicuhw qw d no uicq wef ih </h></div>
        </div >
    )
}

export default Page
