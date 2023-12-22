import React from 'react';
import './AboutSliderCard.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//let { admin} = useSelector(state => state.userAuth)
function AboutSliderCard() {
    return (
        <div className='carouselCard' style={{backgroundImage:'url(../google-map.jpeg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
            <div className='carouselContent'>
                <h1>About  <span>Us</span> /Haglos </h1>
            </div>
           

        </div>

    );
}

export default React.memo(AboutSliderCard);