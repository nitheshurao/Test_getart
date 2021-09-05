import React, { useEffect, useState } from 'react'
import { getPosts } from "../../redux/actions/Product";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Pages from '../Pages';
import { useDispatch } from 'react-redux';

const APa = () => {
    const [currentId, setCurrentId] = useState(0);

    const dispatch = useDispatch();
    const retr = useEffect(async () => {
        await dispatch(getPosts());
        <Pages setCurrentId={setCurrentId} />
    }, [currentId, dispatch]);

    return (
        <div>
            <Grid item xs={12} sm={7}>

                {retr}
                <Pages setCurrentId={setCurrentId} />
            </Grid>
        </div>

    )
}

export default APa
