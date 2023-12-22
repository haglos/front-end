import React, { useEffect } from 'react';
import './ProgressBar.css';
import AOS from 'aos'
import "aos/dist/aos.css";


function ProgressBar({ about, percent }) {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (
        <div className='progress-container' 
        data-aos="fade-up">
            <h3 className='progress-text'>{about}</h3>

            <div className='progressive-bar'>

                <div className='progressive' style={{width:percent}}>
                  {percent}

                </div>

            </div>

        </div>


    );
}

export default React.memo(ProgressBar);