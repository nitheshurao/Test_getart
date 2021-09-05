import React from 'react'
import './Page.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
const Page = ({ posts, setCurrentId }) => {
    const dispatch = useDispatch();

    console.log("postss" + posts)
    return (
        <div className="head">
            <div className="h-de"> <h1>posts.title</h1>    <button className="btn">  <MoreHorizIcon fontSize="default" /></button></div>

            <div className="image">
                <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" />

            </div>
            <div className="h-de-2"> <h>page</h><h>pagedksncldjcwdjc wjdnfcwi dcjnwoduc jwdncowiu jwndoiuc ijqwnd oicuhw qw d no uicq wef ih  ncldjcwdjc wjdnfcwi dcjnwoduc jwdncowiu jwndoiuc ijqwnd oicuhw qw d no uicq wef ih </h></div>
        </div>
    )
}

export default Page
