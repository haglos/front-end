import React, { useEffect } from 'react';
import './FeatureCard.css';
import AOS from 'aos'
import "aos/dist/aos.css";

function FeatureCard() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (
        <div className='feature-card' 
        data-aos="fade-up">
            <span className='material-icons' style={{ color: 'rgb(58, 79, 175)', fontSize: '5rem' }}>
                settings
            </span>
            <h3>Architect design</h3>
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan</p>

        </div>
    );
}

export default React.memo(FeatureCard);