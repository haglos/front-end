import React, { useEffect } from 'react';
import './About.css';
import ProgressBar from './ProgressBar';
import TopicHead from './TopicHead';
import AOS from 'aos'
import "aos/dist/aos.css";


function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })


    return (<div
        className='about-section'
        data-aos="fade-up">
        <TopicHead headText='WHO' colorText='WE ARE' />

        <div className='about-content'>
            <div className='about-left'>
                <p>The best place for elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minimam, quis nostrud exercitation oris nisi ut aliquip ex ea.</p>

                <h2 className='heading'>Our Quality</h2>

                <ProgressBar about='Security' percent='80%' />

                <ProgressBar about='Insurance' percent='30%' />


                <ProgressBar about='Product Efficiency' percent='60%' />




            </div>
            <div className='about-right' >
                <div className='image-box' style={{ backgroundImage: 'url(../../tracker4.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', }}>

                </div>
            </div>
        </div>

    </div>

    );
}

export default React.memo(About);