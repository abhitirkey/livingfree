import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
  }));

function OurThemes() {
    return (
        <div className={`PageContentSection`}>
            <h2>OUR THEMES</h2>
            <br /><br />
            <GridContainer container spacing={2}>
                <Grid item md={4} sm={6}>
                    <img src="https://via.placeholder.com/640x480.png?text=Theme" width="100%" alt="Pic"/>
                </Grid>
                <Grid item md={4} sm={6}>
                    <img src="https://via.placeholder.com/640x480.png?text=Theme" width="100%" alt="Pic"/>
                </Grid>
                <Grid item md={4} sm={6}>
                    <img src="https://via.placeholder.com/640x480.png?text=Theme" width="100%" alt="Pic"/>
                </Grid>
                <Grid item md={4} sm={6}>
                    <img src="https://via.placeholder.com/640x480.png?text=Theme" width="100%" alt="Pic"/>
                </Grid>
                <Grid item md={4} sm={6}>
                    <img src="https://via.placeholder.com/640x480.png?text=Theme" width="100%" alt="Pic"/>
                </Grid>
                <Grid item md={4} sm={6}>
                    <img src="https://via.placeholder.com/640x480.png?text=Theme" width="100%" alt="Pic"/>
                </Grid>
            </GridContainer>
        </div>
    )
}

export default OurThemes
