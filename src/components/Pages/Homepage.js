import React from 'react'
import { Link } from 'react-router-dom'

import HomepageTop from '../HomepageTop/HomepageTop';
import OurStory from '../OurStory';
import Experiences from '../Experiences';
import OurThemes from '../OurThemes';
import ProgramIncludes from '../ProgramIncludes';
import ProgramCarousel from '../ProgramCarousel/ProgramCarousel';
import APlaceForFreedom from '../APlaceForFreedom';
import Attend from '../Attend';
import Speakers from '../Speakers';
import ProgramDatesAndMap from '../ProgramDatesAndMap';
import RegionalAdminOfficialAmbassadors from '../RegionalAdminOfficialAmbassadors';
import ConfidentialAndTraining from '../ConfidentialAndTraining';

import './Homepage.scss'

function Homepage() {

    return (
        <div className='Homepage__Container'>
            <HomepageTop />
            <div className="ContentSection">
                <OurStory />
                <OurThemes />
                <Experiences />
                <ProgramCarousel />
                <ProgramIncludes />
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
