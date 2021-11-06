import React from 'react'

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import classes from './Speakers.module.css';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
}));

function index() {
    return (
        <>
            <h3 style={{marginBottom: '1.5rem'}}>Speakers</h3>
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus</p>
            <GridContainer container spacing={2}>
                <Grid item md={3} xs={6} className={classes.Grid}>
                    <img src="https://via.placeholder.com/100x200.png?text=Speaker" width="50%" alt="Speaker"/>
                    <h5>Nalini Tristram</h5>
                    <strong>Consultant</strong>
                    <span>Session: Love of God</span>
                </Grid>
                <Grid item md={3} xs={6} className={classes.Grid}>
                    <img src="https://via.placeholder.com/100x200.png?text=Speaker" width="50%" alt="Speaker"/>
                    <h5>Varsha</h5>
                    <strong>Teacher</strong>
                    <span>Session: Rejection</span>
                </Grid>
                <Grid item md={3} xs={6} className={classes.Grid}>
                    <img src="https://via.placeholder.com/100x200.png?text=Speaker" width="50%" alt="Speaker"/>
                    <h5>Abhishek</h5>
                    <strong>Software Engineer</strong>
                    <span>Session: Way to Freedom (Tamil)</span>
                </Grid>
                <Grid item md={3} xs={6} className={classes.Grid}>
                    <img src="https://via.placeholder.com/100x200.png?text=Speaker" width="50%" alt="Speaker"/>
                    <h5>Thomas</h5>
                    <strong>Sr. Graphic Designer</strong>
                    <span>Session: Rejection (Tamil)</span>
                </Grid>
            </GridContainer>
        </>
    )
}

export default index
