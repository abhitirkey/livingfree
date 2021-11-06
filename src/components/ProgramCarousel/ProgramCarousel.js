import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { FaHeart, FaMicrophoneAlt } from 'react-icons/fa';

import CarouselItem from './CarouselItem';

import classes from './ProgramCarousel.module.css';

import ItemArray from './ItemArray';

const ProgramCarousel = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <div style={{position : 'relative'}}>
            <div className={classes.CarouselTopBanner}>
                <div>
                    <h3>9</h3>
                    <p>Years</p>
                </div>
                <div>
                    <h3><FaHeart/></h3>
                    <p>9000 Touched</p>
                </div>
                <div>
                    <h3><FaMicrophoneAlt/></h3>
                    <p>100's of Sessions</p>
                </div>
            </div>
            <Carousel className={classes.CarouselContainer}>
                {
                    ItemArray.map((item) => <CarouselItem ImgSrc={item.imgSrc} Text={item.text}/> )
                }
            </Carousel>
        </div>
    )
}

export default ProgramCarousel
