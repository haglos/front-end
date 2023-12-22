import React from 'react';
import './Services.css';
import ServiceCard from './ServiceCard'



function Services() {
    

    return (
        <div className='service-section'>
            <div className='wrapper'>

                <div className='card-container'>

                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>

                </div>







            </div>

        </div>


    );
}

export default React.memo(Services);