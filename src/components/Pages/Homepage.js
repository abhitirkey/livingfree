import React from 'react'
import { Link } from 'react-router-dom'

import HomepageTop from '../HomepageTop/HomepageTop';
import ProgramCarousel from '../ProgramCarousel/ProgramCarousel';
import APlaceForFreedom from '../APlaceForFreedom';
import Attend from '../Attend';
import Speakers from '../Speakers';
import ProgramDatesAndMap from '../ProgramDatesAndMap';
import RegionalAdminOfficialAmbassadors from '../RegionalAdminOfficialAmbassadors';
import ConfidentialAndTraining from '../ConfidentialAndTraining';

import './Homepage.scss'

function Homepage() {

    const regionalArray = ['Bangalore', 'Mumbai', 'North India', 'Chennai']
    const regionalURIs = ['bangalore', 'mumbai', 'north-india', 'chennai'];
    return (
        <div className='Homepage__Container'>
            <HomepageTop />
            <div className="ContentSection">
                <ProgramCarousel />
                <APlaceForFreedom />
                <Attend />
                <Speakers />
                <ProgramDatesAndMap />
                <RegionalAdminOfficialAmbassadors />
                <ConfidentialAndTraining />
            </div>
        </div>
    )
}

export default Homepage
