import React from 'react'
import { Paper } from '@material-ui/core'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import classes from './ProgramCarousel.module.css';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
}));

function CarouselItem(props) {

    return (
        <Paper>
            <GridContainer container spacing={2}>
                <Grid item md={5} sm={12}>
                    <img src={props.ImgSrc} width="300px" alt="placeholder"/>
                </Grid>
                <Grid item md={7} sm={12} className={classes.TestimonialText}>
                    <p>{props.Text}</p>
                </Grid>
            </GridContainer>
        </Paper>
    )
}

export default CarouselItem
