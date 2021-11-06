import React from 'react'
import Box from '@mui/material/Grid';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Calendar from "@ericz1803/react-google-calendar";

import './RegionalPage.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '8px auto',
    width: 175,
    textAlign: 'center'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// Calendar data
const API_KEY = "AIzaSyCeth8fU0ETB8jDKobIFm2aOa5wTQMdVug";
let calendars = [
  {
    calendarId: "en.indian#holiday@group.v.calendar.google.com",
    color: "#337DFF" //optional, specify color of calendar 2 events
  },
];


function RegionalPage() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

    const Team = [
      {
        name: 'Person',
        role: 'Role'
      },
      {
        name: 'Person',
        role: 'Role'
      },{
        name: 'Person',
        role: 'Role'
      },{
        name: 'Person',
        role: 'Role'
      },
    ];

    return (
        <div className="PageContainer RegionalPage">
            <Box className="RegionalImageContainer" />
            <div className="PageContentSection">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Select Region</InputLabel>
                    <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                    <option aria-label="None" value="" />
                    <option value='bengaluru'>Bengaluru</option>
                    <option value='chennai'>Chennai</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='north-india'>North India</option>
                    </Select>
                </FormControl>
                <h2>Why attend?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>       
                <div className="team">
                  <h2>Team</h2>
                  <Grid container justifyContent="center" spacing={3}>
                  {
                    Team.map((element, index) => (
                        <Grid key={index} item xs={6} sm={3} className="TeamMemberContainer">
                            <Box className="TeamMemberImageContainer" />
                            <span><strong>{element.name}</strong></span>
                            <span>{element.role}</span>
                        </Grid>
                    ))}
                  </Grid>
                </div>
                  <h2>Topic</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <h2>Dates</h2>
                  <Calendar apiKey={API_KEY} calendars={calendars} />
            </div>
        </div>
    )
}

export default RegionalPage
