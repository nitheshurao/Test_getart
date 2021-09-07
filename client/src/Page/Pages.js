
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


import useStyles from './style';
// import Page from './Pagee/Page';



import React from 'react'
import Page from './Pagee/Page'
import './Pages.css'
const Pages = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    return (
        <div className="product">
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
        </div>
    )
}

export default Pages
