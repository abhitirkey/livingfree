import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import classes from './ProgramIncludes.module.css';
import { FaHeart, FaUser, FaCoffee } from 'react-icons/fa';
import { MdGroup, MdChatBubble } from 'react-icons/md';

const GridContainer = styled(Grid)(({ theme }) => ({
    flexGrow : 1
  }));

function ProgramIncludes() {
    return (
        <div className={`PageContentSection`}>
            <h2>PROGRAM INCLUDES</h2>
            <br /><br />
            <div className={classes.ProgramTitleSection}>
                <div className={classes.TitleContainer}>
                    <div className={classes.CircularContainer}>
                        <FaHeart />
                    </div>
                    <span>Love and Acceptance</span>
                </div>
                <div className={classes.TitleContainer}>
                    <div className={classes.CircularContainer}>
                        <FaUser />
                    </div>
                    <span>Meet New Faces</span>
                </div>
                <div className={classes.TitleContainer}>
                    <div className={classes.CircularContainer}>
                        <FaCoffee />
                    </div>
                    <span>Games and Snacks</span>
                </div>
                <div className={classes.TitleContainer}>
                    <div className={classes.CircularContainer}>
                        <MdChatBubble />
                    </div>
                    <span>Interactive Sessions and Real Stories</span>
                </div>
                <div className={classes.TitleContainer}>
                    <div className={classes.CircularContainer}>
                        <MdGroup />
                    </div>
                    <span>Personal One-to-one Counseling</span>
                </div>
            </div>
            <div className={classes.TextSection}>
                <p>These sessions answer some of today's most critical questions, such as:</p>
                <div className={classes.Questions}>
                    <p>'What is true love?'</p>
                    <p>'Is sex good or bad?'</p>
                    <p>'How to deal with rejection and hurts?'</p>
                    <p>'Can I know God personally?'</p>
                </div>
                <p>The highlight of this programme is a time of <strong>one-on-one interaction</strong> (like counselling) with a team member where delegates can open up and share their struggles and experiences in confidentiality to get help. We have seen many lives transformed over the years, with people getting a taste of true freedom.
</p>
            </div>
        </div>
    )
}

export default ProgramIncludes;
