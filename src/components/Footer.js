import React, { useEffect } from 'react';
import './Footer.css';
import AOS from 'aos'
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

//let { admin} = useSelector(state => state.userAuth)
function Footer() {
    let navigate = useNavigate()
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })

    let navigateHandler = () => {
        navigate('/signup')
    }



    return (<div className='footer' data-aos="fade-up">
        <div className='brands'>
            <div className='image-container'>
                <img src='../../logo1.png' onClick={navigateHandler} />

            </div>
            <div className='image-container'>
                <img src='../../logo2.png' />

            </div>
            <div className='image-container'>
                <img src='../../logo7.png' />

            </div>
            <div className='image-container'>
                <img src='../../logo4.png' />

            </div>
            <div className='image-container'>
                <img src='../../logo5.png' />

            </div>
            <div className='image-container'>
                <img src='../../logo6.png' />

            </div>



        </div>

        <div className='footer-head'>
            <div className='footer-head-content'>
                <div className='logoContainer'>
                    <h1>LOGO</h1>

                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse.
                </p>



                <div className='list'>
                    <span className='material-icons'>add_location</span><p>
                        No. 155, Effurun Sapele Road Building Opp. Esedo Primary Schol Effurun,Delta State

                    </p>



                </div>

                <div className='list'>
                    <span className='material-icons'>phone</span>
                    <p>07077971439,08134469454
                    </p>
                </div>

                <div className='list'>
                    <span className='material-icons'>email</span>
                    <p>
                        hagloservices@gmail.com

                    </p>



                </div>






            </div>
            <div className='footer-head-content'>
                <div className='navigation-head'>
                    <h1>Quick Links</h1>
                    <div className='navigation-link-con'>
                        <div className='navigation-link'>
                            <div className='links'>
                                <span className='material-icons'>
                                    double_arrow
                                </span>
                                <p>Footer</p>

                            </div>

                            <div className='links'>
                                <span className='material-icons'>
                                    double_arrow
                                </span>
                                <p>About Us</p>

                            </div>


                            <div className='links'>
                                <span className='material-icons'>
                                    double_arrow
                                </span>
                                <p>Our Team</p>

                            </div>
                            <div className='links'>
                                <span className='material-icons'>
                                    double_arrow
                                </span>
                                <p>Our Services</p>

                            </div>

                            <div className='links'>
                                <span className='material-icons'>
                                    double_arrow
                                </span>
                                <p>Blogs</p>

                            </div>

                        </div>


                    </div>

                </div>

            </div>



            <div className='footer-head-content'>
                <div className='navigation-head'>
                    <h1>Newsletters</h1>
                    <p>
                        Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.
                    </p>
                    <form>
                        <input />
                        <button>
                            Suscribe
                        </button>

                    </form>


                </div>

            </div>
            <div className='footer-head-content'>
                <div className='navigation-head'>
                    <h1>Map</h1>

                </div>
                <div className="textwidget custom-html-widget">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1000338199156!2d5.779570814765897!3d5.552186595974376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad625025100d%3A0x6f14642d0ae4c417!2sHIMALONE%20GLOBAL%20SERVICES!5e0!3m2!1sen!2sng!4v1625428147727!5m2!1sen!2sng" width="500" height="250" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>


        </div>







    </div >

    );
}

export default React.memo(Footer);