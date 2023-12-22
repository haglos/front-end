import React, { useEffect } from 'react';
import './TopicHead.css';
import AOS from 'aos'
import "aos/dist/aos.css";

//let { admin} = useSelector(state => state.userAuth)
function TopicHead({headText,colorText,headColor}) {
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
    })

    return (
        <div className='header' data-aos="fade-up">
            <div className='header-box'>

            </div>
            <div className='header-text-con'>
                <h2 style={{color:headColor?headColor:'color:rgb(50,50,50)'}}>{headText}</h2>
                <h1 className='text'>{colorText}</h1>

            </div>

        </div>


    );
}

export default React.memo(TopicHead);