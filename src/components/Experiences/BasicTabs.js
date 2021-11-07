import React from 'react'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DOMPurify from 'dompurify';

import ExperiencesData from './ExperiencesData';
import classes from './Experiences.module.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const sanitizer = DOMPurify.sanitize;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            ExperiencesData.map((item, index) => {
              return <Tab label={item.label} {...a11yProps(index)} />
            })
          }
        </Tabs>
      </Box>
      {
        ExperiencesData.map((item, index) => {
          const purifiedHTML = sanitizer(item.content);
          return <TabPanel value={value} index={index}><div className={classes.Testimonials} dangerouslySetInnerHTML={{__html: purifiedHTML}} /></TabPanel>
        })
      }
    </Box>
  );
}