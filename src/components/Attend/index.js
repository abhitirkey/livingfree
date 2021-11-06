import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
}));

function Attend() {
    return (
        <>
            <GridContainer container spacing={2}>
                <Grid item sm={6}>
                <h3 style={{marginBottom: '1rem'}}>Why attend?</h3>
                    <GridContainer container spacing={2}>
                        <Grid item sm={5} xs={12}>
                            <img src="https://via.placeholder.com/300x300.png?text=Poster" width="100%" alt="Pic"/>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </Grid>
                    </GridContainer>
                </Grid>
                <Grid item sm={6}>
                    <h3 style={{marginBottom: '1rem'}}>Who should attend?</h3>
                    <GridContainer container spacing={2}>
                        <Grid item sm={5} xs={12}>
                            <img src="https://via.placeholder.com/300x300.png?text=Poster" width="100%" alt="Pic"/>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </Grid>
                    </GridContainer>
                </Grid>
            </GridContainer>
        </>
    )
}

export default Attend
