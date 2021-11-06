import React from 'react'

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem';

import ItemArray from './ItemArray';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
}));

function RegionalAdminOfficialAmbassadors() {
    return (
        <>
            <GridContainer container spacing={2}>
                <Grid item sm={6}>
                <h3 style={{marginBottom: '1rem'}}>Regional Admin</h3>
                    <GridContainer container spacing={2}>
                        <Grid item sm={5} xs={12}>
                            <img src="https://via.placeholder.com/300x300.png?text=Poster" width="100%" alt="Pic"/>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                            <p>Problem registering or if you would like to conduct LF on campus, contact XYZ.</p>
                        </Grid>
                    </GridContainer>
                </Grid>
                <Grid item sm={6}>
                    <h3 style={{marginBottom: '1rem'}}>Official Ambassadors</h3>
                    <Carousel>
                    {
                        ItemArray.map((item) => <CarouselItem ImgSrc={item.imgSrc}/> )
                    }
                    </Carousel>
                </Grid>
            </GridContainer>
        </>
    )
}

export default RegionalAdminOfficialAmbassadors;
