import React from 'react';
import './CarouselCard.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselCard() {
    return (
        <div className='carouselCard'
            style={{ backgroundImage: 'url(../tracker4.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>

            <div className='carouselContent'>
                <h1>Haglos Tracking Company</h1>
                <p>We provide always our best services for our clients's satisfaction</p>
                <div className='buttonContainer'>
                    <button>get started</button>
                </div>

            </div>
           

        </div>

    );
}

export default React.memo(CarouselCard);