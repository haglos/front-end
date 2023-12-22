import React from 'react';
import './AuthSliderCard.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//let { admin} = useSelector(state => state.userAuth)
function AuthSliderCard({status}) {
    return (
        <div className='carouselCard' style={{backgroundImage:'url(../google-map.jpeg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
            <div className='carouselContent'>
                {status=== 'login'?<h1>Log<span>In</span></h1>:<></>}

                {status=== 'signup'?<h1>Regis<span>ter</span></h1>:<></>}

                {status=== 'dashboard'?<h1>Dash<span>board</span></h1>:<></>}

                {status=== 'add'?<h1>Add <span>Client</span></h1>:<></>}

            </div>
        </div>

    );
}

export default React.memo(AuthSliderCard);