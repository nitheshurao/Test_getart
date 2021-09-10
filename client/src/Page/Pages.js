
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Page from './Pagee/Page';
import './Pages.css';





const Pages = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    console.log(posts)

    return (
        !posts.length ? <CircularProgress /> : (
            // <Grid container alignItems="stretch" spacing={3} >
            <div className="product">
                {
                    posts.map((post) => (
                        // <Grid key={post._id} item xs={12} sm={6} md={6}>

                        <Page post={post} setCurrentId={setCurrentId} />
                        // <h1>posss</h1>
                        // </Grid>
                    ))
                }
            </div>
            // </Grid >
        )
    );
};

export default Pages;