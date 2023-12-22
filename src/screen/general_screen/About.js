import React from 'react';
import './About.css';
import Navigation from '../../components/Navigation';
import News from '../../components/News';
import Footer from '../../components/Footer';
import AboutSlider from '../../components/AboutSlider';

//let { admin} = useSelector(state => state.userAuth)
function AboutUs() {
    return (
        <>
            <Navigation 
            activeScreen='about' 
            status={false} 
            />

            <AboutSlider />
            <News />
            <Footer/>
        </>

    );
}

export default AboutUs;