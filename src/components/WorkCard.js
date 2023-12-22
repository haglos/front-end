import React, { useEffect } from 'react';
import './WorkCard.css';
import AOS from 'aos'
import "aos/dist/aos.css";

function WorkCard() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })
    return (<div className='work-image' style={{ backgroundImage: 'url(../../tracker3.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} data-aos="fade-up">
    <div className='curtain'>
        <h1>CONSTRUCT ENGINEER</h1>
        <p>CIVIL ENGINEERING PROJECT</p>

    </div>

</div>);
}

export default React.memo(WorkCard);