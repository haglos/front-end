import React, { useEffect } from 'react';
import './News.css';
import NewsCard from './NewsCard';
import TopicHead from './TopicHead';



function News() {
 


    return (<div className='news' 
    >
    <TopicHead
        headText='LATEST'
        colorText='NEWS' />

    <div className='wrapper'>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
    </div>



</div> );
}

export default React.memo(News);