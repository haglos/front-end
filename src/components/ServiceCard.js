import React, { useEffect } from 'react';
import './ServiceCard.css';
import AOS from 'aos'
import "aos/dist/aos.css";


function ServiceCard() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (
        <div className='service-card' data-aos="fade-up">
            <div className='card-head'  >

                <div className='img' style={{ backgroundImage: 'url(../../tracker3.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} >

                    <div className='curtain'>
                        <button>READ MORE</button>

                    </div>

                </div>

            </div>
            <div className='card-tail'>
                <div className='footer-left'>
                    <span className='material-icons' style={{ fontSize: '3rem', color: 'rgb(58, 79, 175)' }}>settings</span>

                </div>

                <div className='footer-right'>
                    <h3>House Renovation</h3>
                    <p>Lorem ipsum dolor sit amet solut, consectetur adipiscing elit, sed do eiusmod tempor.</p>


                </div>

            </div>


        </div>


    );
}

export default React.memo(ServiceCard);