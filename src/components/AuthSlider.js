import React, { useEffect } from 'react';
import './AuthSlider.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AuthSliderCard from './AuthSliderCard';
import AOS from 'aos'
import "aos/dist/aos.css";

function AuthSlider({status}) {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })
    return (
            <Carousel showStatus={false} autoplay={true} interval={3000} showThumbs={false} showArrows={false} infiniteLoop={true} showIndicators={false} >

                <AuthSliderCard  status ={status}/>


            </Carousel>
    );
}

export default React.memo(AuthSlider);