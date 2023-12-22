import React, { useEffect } from 'react';
import './TestimonyCard.css';
import AOS from 'aos'
import "aos/dist/aos.css";


function TestimonyCard({username,country,imgUrl}) {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (
        <div className='testimony-card' data-aos="fade-up">
            <div className='img-con'>
                <img src={imgUrl} />

            </div>

            <div className='username-con'>
                <h1>{username}</h1>

            </div>
            <div className='username-con'>
                <h2>{country}</h2>

            </div>
            <div className='star-con'>
                <span className='material-icons'>
                    star
                </span>
                <span className='material-icons'>
                    star
                </span>
                <span className='material-icons'>
                    star
                </span>
                <span className='material-icons'>
                    star
                </span>
                <span className='material-icons'>
                    star
                </span>
            </div>

            <div className='paragraph-con'>
                <p> Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan </p>

            </div>

        </div>
    );
}

export default React.memo(TestimonyCard);