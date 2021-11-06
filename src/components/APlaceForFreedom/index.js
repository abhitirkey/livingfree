import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

import classes from './APlaceForFreedom.module.css';

import { FaRegCalendarPlus, FaGooglePlay, FaAppStore, FaShareAlt, FaDownload } from 'react-icons/fa';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
  }));

function APlaceForFreedom() {

    return (
        <div>
            <GridContainer container spacing={2}>
                <Grid item md={6} sm={12} className={classes.ImgContainer}>
                    <h3>A PLACE FOR FREEDOM</h3>
                    <img src="https://via.placeholder.com/350x250.png?text=Poster" width="350px" alt="placeholder"/>
                    <div className={classes.imgLinks}>
                        <a href="#" target="_blank" rel="noreferrer"><FaShareAlt /></a>
                        <a href="#" target="_blank" rel="noreferrer"><FaDownload /></a>
                    </div>
                </Grid>
                <Grid item md={6} sm={12} className={classes.TextSection}>
                    <div>
                        <div>
                            <span className={classes.Text}>Date | Time</span>
                            <span className={classes.iconLinks}>
                                <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><FaRegCalendarPlus /></a>
                            </span>
                        </div>
                        <div>
                            <span className={classes.Text}>Location: Zoom Live</span>
                            <span className={classes.iconLinks}>
                                <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><FaGooglePlay /></a>
                                <a href="https://apps.apple.com/us/app/zoom-cloud-meetings/id546505307" target="_blank" rel="noreferrer"><FaAppStore /></a>
                            </span>
                        </div>
                        <div>Duration: 1:30pm</div>
                        <div>Personal One-To-One ministry available</div>
                        <Button variant="contained" style={{ width: 'fit-content' }}>Register</Button>
                    </div>
                </Grid>
            </GridContainer>
        </div>
    )
}

export default APlaceForFreedom
