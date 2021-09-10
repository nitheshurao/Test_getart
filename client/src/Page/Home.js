import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../redux1/actions/Product';
import Pages from './Pages';

import "./Pages.css";

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        // <Grow in>
        //     <Container>
        //         <Grid container justify="space-between" spacing={5}>
        //             <Grid item xs={1} sm={7}>
        //                 <div className="product">
        //                     <Pages setCurrentId={setCurrentId} />
        //                     {/* <Posts setCurrentId={setCurrentId} /> */}
        //                 </div>
        //             </Grid>

        //         </Grid>
        //     </Container>
        // </Grow>
        <div className="product">
            <Pages setCurrentId={setCurrentId} />
            {/* <Posts setCurrentId={setCurrentId} /> */}
        </div>
    );
};

export default Home;