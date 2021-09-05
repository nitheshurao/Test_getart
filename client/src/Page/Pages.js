import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


import useStyles from './style';
import Page from './Pagee/Page';

const Pages = ({ setCurrentId, post }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts)
    const ret = async () => {
        if (posts) {
            await renderList()
        }
    }
    const renderList = posts.map((product) => {
        return (
            <Page
                posts={product}

            />
        );
    });


    return (
        // !posts.length ? <CircularProgress /> :
        //     (
        //         <Grid className={classes.container} container alignItems="stretch" spacing={3}>

        //             {
        //                 posts.map((post, i) => (
        //                     <Grid key={post._id} item xs={12} sm={6} md={6}>
        //                         <Page post={post} setCurrentId={setCurrentId} />
        //                     </Grid>
        //                 ))
        //             }
        //         </Grid>
        //     )


        < div >
            {ret}
            {/* < CircularProgress /> */}
            {/* {renderList} */}

        </ div >



    );
};

export default Pages;