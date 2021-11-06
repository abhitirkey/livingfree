import React from 'react'

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import MapContainer from './MapContainer';

import classes from './ProgramDatesAndMap.module.css';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
}));

function index() {
    return (
        <>
            <GridContainer container spacing={2}>
                <Grid item sm={8} style={{ height: '375px' }}>
                    <table className={classes.ProgramTable}>
                        <tr>
                            <th>Program Dates for 2021</th>
                            <th>Program Topics</th>
                        </tr>
                        <tr>
                            <td>Date 1</td>
                            <td>Centro comercial Moctezuma</td>
                        </tr>
                        <tr>
                            
                            <td>Date 2</td>
                            <td>Mexico</td>
                        </tr>
                    </table>
                </Grid>
                <Grid item sm={4}>
                    <h3 style={{marginBottom: '1rem'}}>Our location</h3>
                    <MapContainer/>
                </Grid>
            </GridContainer>
        </>
    )
}

export default index;
