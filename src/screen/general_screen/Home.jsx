import React, { useEffect, useState,useCallback  } from 'react';
import './Home.css';
import Navigation from '../../components/Navigation';
import Slider from '../../components/Slider';
import Feature from '../../components/Feature';
import Services from '../../components/Services';
import TopicHead from '../../components/TopicHead';
import About from '../../components/About';
import Work from '../../components/Work';
import Testimony from '../../components/Testimony';
import { Recoveries } from '../../components/Recoveries';
import News from '../../components/News';
import Footer from '../../components/Footer';
import "aos/dist/aos.css";
import Loader from '../../components/Loader';
import ModalError from '../../components/ModalError.js';
import { useDispatch } from "react-redux";
import { recovery } from "../../store/action/userAppStorage";


function Home() {
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [errorContent, setErrorContent] = useState('')
    let dispatch = useDispatch()


    let loadRecoveryClients = useCallback(async() => {
        setIsLoading(true)
        
        let res = await dispatch(recovery())
        if (!res.bool) {
            throw new Error('error occured')
        }
        
        
         
    },[recovery])


    useEffect(()=>{
        loadRecoveryClients().then(data=>{
            setIsLoading(false)
        }).catch(data => {
            setIsError(true)
            setErrorContent(data)
            setIsLoading(false)
        })

    },[loadRecoveryClients])

    

    let gotIt = useCallback(()=>{
        setIsError(false)
        setErrorContent('')
        setIsLoading(false)
    },[])

    


    return (
        <>
            {isLoading ? <Loader /> : <></>}
            {isError ? <ModalError errorText={errorContent} gotIt={gotIt} /> : <></>}
            <Navigation activeScreen='home' status={true} />
            <Slider />
            <Feature />


            <TopicHead headText='OUR PROFESSIONAL' colorText='SERVICES' />

            <Services />

            <About />

            <Work />
            <Testimony />
            <Recoveries />
            <News />

            <Footer />



        </>

    );
}

export default Home;