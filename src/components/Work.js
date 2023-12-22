import React, { useEffect } from 'react';
import './Work.css';
import TopicHead from './TopicHead';
import WorkCard from './WorkCard';


function Work() {
    

    return (<div className='work' >
    <div className='work-head'>
        <div className='left'>
            <TopicHead headText='SEE OUR' colorText='WORK' headColor='#fff' />

        </div>
        <div className='right'>
            <button>View all</button>

        </div>


    </div>
    <div className='work-image-wrapper'>
        
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>


    </div>

</div>

    );
}

export default React.memo(Work);