import React from 'react'

const CarouselItem = (props) => {
    const { ImgSrc } = props;
    return (
        <div>
            <img src={ImgSrc} width="100%" alt="placeholder" />
        </div>
    )
}

export default CarouselItem
