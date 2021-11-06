import React from 'react'
import { Link } from 'react-router-dom'
import classes from './HomepageTop.module.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Logo from './images/LivingFreeLogo.png';
import Ambassador from './images/Ambassador.png';
import { FaFacebookSquare, FaInstagramSquare, FaShareAlt, } from 'react-icons/fa';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
  }));

function HomepageTop() {
    return (
        <>
            <div className={classes.NavSection}>
                <img src={Logo} alt="Logo"></img>
                <div className={classes.MenuList}>
                    <Link to='/story'><h3>OUR STORY</h3></Link>
                    <Link to='/videos'><h3>VIDEOS</h3></Link>
                    <Link to='/testimonies'><h3>PEOPLE'S TESTIMONIES</h3></Link>
                </div>
                <div />
            </div>
            <div className={classes.BodySection}>
                <img src="https://via.placeholder.com/1920x800.png?text=Poster" width="100%" alt="placeholder"/>
                <div className={classes.floatingLinks}>
                    <h3>OUR SITES</h3>
                    <Link to="/face-to-face"><span>Face to Face Program</span><p>(Bangalore)</p></Link>
                    <Link to="/online-english"><span>Online Program</span><p>(in English)</p></Link>
                    <Link to="/online-hindi"><span>Online Program</span><p>(in Hindi)</p></Link>
                </div>
                <GridContainer container spacing={2}>
                    <Grid item md={4} sm={12}>
                        <img src="https://via.placeholder.com/640x480.png?text=What-is-LF-video" width="350px" alt="placeholder"/>
                    </Grid>
                    <Grid item md={8} sm={12}>
                        <div className={classes.TitleSection}>
                            <h2>THE PLACE FOR YOUTH TRANSFORMATION AND RESTORATION</h2>
                            <div className={classes.SMLinks}>
                                <Link to='/story'><FaFacebookSquare /></Link>
                                <Link to='/videos'><FaInstagramSquare /></Link>
                                <Link to='/testimonies'><FaShareAlt /></Link>
                            </div>
                            <div className={classes.RegionalAmbassador}>
                                <img src={Ambassador} alt="Ambassador" width="70px"/>
                                <p>BECOME AN OFFICIAL REGIONAL AMBASSADOR</p>
                                <Button variant="contained" style={{ width: 'fit-content' }}>JOIN</Button>
                            </div>
                            
                        </div>
                    </Grid>
                </GridContainer>
            </div>
        </>
    )
}

export default HomepageTop
