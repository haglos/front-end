import React, { useEffect } from 'react';
import './Testimony.css';
import TestimonyCard from './TestimonyCard';
import TopicHead from './TopicHead';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 750, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Testimony() {
  


    return (
        <div className='testimony' >

            <TopicHead headText='OUR' colorText='TESTIMONIES' />
            <Carousel swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass='carousels-root'
                

            >
                <TestimonyCard
                    username='Christy Mayer' country='San Fransisco' imgUrl='../../testimony1.jpg' />

                <TestimonyCard
                    username='John May' country='United States' imgUrl='../../testimony2.jpg' />

                <TestimonyCard
                    username='winsprey rallei' country='San Fransisco' imgUrl='../../testimony3.jpg' />




            </Carousel>














        </div >

    );
}

export default React.memo(Testimony);