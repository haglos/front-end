import React, { useState, useCallback } from 'react';
import './Navigation.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "../store/action/userAppStorage";

//let { admin} = useSelector(state => state.userAuth)
function Navigation({ activeScreen, status }) {
    let [isMobile, setIsMobile] = useState(false)
    let [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { admin } = useSelector(state => state.userAuth)

    window.addEventListener('resize', () => {
        if (Number(window.innerWidth) < 750) {
            setIsMobile(true)
            //
        } else {
            //
            setIsMobile(false)
            setIsShowMobileMenu(false)
        }
    })

    let logoutHandler = useCallback(async()=>{
        //logging out user
        await dispatch(logout()) 
        navigate('/login')

    },[logout])

    let navigateHandler = useCallback((link) => {
        navigate(`/${link}`)
    }, [navigate])


    window.addEventListener("scroll", function () {
        const navigation = document.querySelector(".navigation")

        if (window.scrollY > 200) {
            navigation.style.backgroundColor = 'rgb(20, 40, 56)'

        } else {
            navigation.style.backgroundColor = 'rgb(20, 40, 56)   '
            if (Number(window.innerWidth) < 750) {
                return
            }


        }
    })


    let showMobileMenu = useCallback(() => {
        if (isShowMobileMenu === true) {
            setIsShowMobileMenu(false)
            setIsMobile(false)
        } else {
            setIsMobile(true)
            setIsShowMobileMenu(true)
        }
    },[])


    

    return (
        <div className='navContainer'>
            {!status ? <div className='contact'>
                <div className='leftContact'>
                    <ul className='leftList'>
                        <li> <span className='material-icons'>phone</span>(234) 0200 17813

                        </li>
                        <li> <span className='material-icons'>add_location</span> 95 South Park Ave, USA

                        </li>
                        <li> <span className='material-icons'>email</span> info@buildpower.com

                        </li>



                    </ul>

                </div>

                <div className='rightContact'>
                    <ul className='rightList'>

                        <li > <span className='material-icons' >login</span>Login

                        </li>
                        <li > <span className='material-icons'>person</span>Register

                        </li>
                        <li><span className='material-icons'>facebook</span> facebook

                        </li>



                    </ul>

                </div>

            </div> : <></>}





            <div className='navigation'>
                <div className='logoContainer'>
                    <h1>LOGO</h1>

                </div>
                <div className='menu' onClick={showMobileMenu}>
                    <span className='material-icons'>menu</span>
                </div>

                <div className='menuContainer'>
                    <ul>



                        <li style={{ backgroundColor: activeScreen === 'home' ? 'rgb(58, 79, 175)' : 'transparent', padding: activeScreen === 'home' ? '10px 30px' : '0px' }} onClick={() => navigateHandler('')}> HOME</li>


                        {admin ? <></> : <li style={{ backgroundColor: activeScreen === 'about' ? 'rgb(58, 79, 175)' : 'transparent', padding: activeScreen === 'about' ? '10px 30px' : '0px' }} onClick={() => navigateHandler('about')}>ABOUT</li>}

                        {admin ? <></> : <li style={{ backgroundColor: activeScreen === 'login' ? 'rgb(58, 79, 175)' : 'transparent', padding: activeScreen === 'login' ? '10px 30px' : '0px' }} onClick={() => navigateHandler('login')}> LOGIN</li>}


                        {admin ? <li style={{ backgroundColor: activeScreen === 'login' ? 'rgb(58, 79, 175)' : 'transparent', padding: activeScreen === 'login' ? '10px 30px' : '0px' }} onClick={() => navigateHandler('dashboard')}> DASHBOARD</li> : <></>}

                        {admin ? <li style={{ backgroundColor: activeScreen === 'login' ? 'rgb(58, 79, 175)' : 'transparent', padding: activeScreen === 'login' ? '10px 30px' : '0px' }} onClick={() => navigateHandler('add')}> ADD</li> : <></>}

                        {admin ? <li style={{ backgroundColor: activeScreen === 'login' ? 'rgb(58, 79, 175)' : 'transparent', padding: activeScreen === 'login' ? '10px 30px' : '0px' }} onClick={logoutHandler}> LOGOUT</li> : <></>}





                    </ul>

                </div>

            </div>

            {isShowMobileMenu ? <div className={isMobile || isShowMobileMenu ? 'navigationMobile' : 'mobileHideide'}>
                <ul>

                    <li style={{ backgroundColor: activeScreen === 'home' ? 'rgb(58, 79, 175)' : 'transparent', padding: '10px 10px', color: '#fff' }} onClick={() => navigateHandler('')}> Home</li>




                    {admin?<></>:<li style={{ backgroundColor: activeScreen === 'about' ? 'rgb(58, 79, 175)' : 'transparent', padding: '10px 10px', color: '#fff' }} onClick={() => navigateHandler('about')}>About</li>}




                    {admin?<></>:<li style={{ backgroundColor: activeScreen === 'login' ? 'rgb(58, 79, 175)' : 'transparent', padding: '10px 10px', color: '#fff' }} onClick={() => navigateHandler('login')}> Login</li>}




                    {admin?<li className='li' style={{ backgroundColor: activeScreen === 'dashboard' ? 'rgb(58, 79, 175)' : 'transparent', padding: '10px 10px', color: '#ffff' }} onClick={() => navigateHandler('dashboard')}> Dashboard</li>:<></>}

                    {admin?<li className='li' style={{ backgroundColor: activeScreen === 'add' ? 'rgb(58, 79, 175)' : 'transparent', padding: '10px 10px', color: '#ffff' }} onClick={() => navigateHandler('add')}> Add</li>:<></>}

                    {admin?<li className='li' style={{  padding: '10px 10px', color: '#ffff' }} onClick={logoutHandler}> Logout</li>:<></>}


                </ul>

            </div> : <></>}

        </div>

    );
}

export default React.memo(Navigation);