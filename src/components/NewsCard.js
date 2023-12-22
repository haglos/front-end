import React, { useEffect } from 'react';
import './NewsCard.css';
import AOS from 'aos'
import "aos/dist/aos.css";


function NewsCard() {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (<div className='news-card' 
    data-aos="fade-up">
    <div className='left' 
    style={{ backgroundImage: 'url(../../tracker3.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} >

    </div>


    <div className='right'>
        <h1>Tracking news</h1>
        <h3>Jun 23, 2020  /  By Admin</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        <div className='links'>
            <div className='button'>
                <button>
                    Read more...
                </button>
            </div>
            <div className='number-link'>
                <span className='link'>
                    <span className='material-icons'>apple
                    </span>
                    306

                </span>
                <span className='link'>
                    <span className='material-icons'>chat
                    </span>


                    34

                </span>
                <span className='link'>
                    <span className='material-icons'>share
                    </span>

                    22

                </span>

            </div>

        </div>

    </div>

</div>

    );
}

export default React.memo(NewsCard);