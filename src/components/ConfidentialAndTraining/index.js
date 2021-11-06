import React from 'react'

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
}));

function index() {
    return (
        <>
            <h3 style={{marginBottom: '1.5rem'}}>Confidential and Training</h3>
            <GridContainer container spacing={2}>
                <Grid item md={4} xs={12}>
                    <img src="https://via.placeholder.com/300x300.png?text=Pic" width="70%" alt="Pic"/>
                </Grid>
                <Grid item md={8} xs={12}>
                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem.</p>
                    <br />
                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem.</p>
                </Grid>
            </GridContainer>
        </>
    )
}

export default index
