import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import classes from './OurStory.module.css';
const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
  }));

function OurStory() {
    return (
        <div className={`PageContentSection ${classes.OurStorySection}`}>
            <h2>Our Story</h2>
            <p>Living free was started in the later months of 2012, with a heart and vision to reach the youth. 
Our team at the time was only 4 members anchored by John & Nimmi, and our first program had only one delegate turn up.  But the burden & mission was was too big to discontinue and we were led to preserver in our calling. And over the next few months, we seen our sessions getting packed with over 100 youth turning up for the program. 
Our team has since grown from 4 to 30 dedicated members team, and our reach has extended from cox town to the ends of the world.
</p><p>n the year 2021 Eby & Varsha took on responsibility of leading the team to new heights.  Over the last 9 years we have seen transformed & touched lives, Supernatural works and signs, and been apart of innovative program changes. But the need to reach the youth has gotten greater over the years. Our burden and heart continues to beat for the youth !
</p>
<GridContainer container spacing={2}>
    <Grid item md={3} sm={6}>
        <div className={`${classes.CircularHead} ${classes.Blue}`}>
            <h3>9</h3>
            <span>Years</span>
        </div>
        <p>Involved in youth transformation, since 2012</p>
    </Grid>
    <Grid item md={3} sm={6}>
        <div className={`${classes.CircularHead} ${classes.Green}`}>
            <h3>8000+</h3>
            <span>touched</span>
        </div>
        <p>We reach out to an average of 800 youth every year. And it is a joy to witness many of them walk in freedom with their lives significantly transformed.</p>
    </Grid>
    <Grid item md={3} sm={6}>
        <div className={`${classes.CircularHead} ${classes.Yellow}`}>
            <h3>100+</h3>
            <span>Sessions</span>
        </div>
        <p>We have conducted this programme in various schools, colleges, rehab centres, churches. and our location in cox town,Bangalore.</p>
    </Grid>
    <Grid item md={3} sm={6}>
        <div className={`${classes.CircularHead} ${classes.Red}`}>
            <h3>3</h3>
            <span>Languages</span>
        </div>
        <p>We have conducted our programs and counselling in English, Hindi, Tamil and Kannada.</p>
    </Grid>
</GridContainer>

        </div>
    )
}

export default OurStory;
