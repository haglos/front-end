import React, { useEffect } from 'react';
import './Feature.css';
import FeatureCard from './FeatureCard';
import AOS from 'aos'
import "aos/dist/aos.css";

function Feature() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (
        <div className='feature-section' 
        data-aos="fade-up">

            <div className='wrapper'>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
            </div>
        </div>


    );
}

export default React.memo(Feature);