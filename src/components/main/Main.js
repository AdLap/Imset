import React from 'react';
import More from './More';
import Vod from './Vod';
import Offer from './Offer';
import TvNow from './TvNow';
import './Main.scss';

const Main = () => {
    return (
        <main className='main container'>
            <More />
            <Vod />
            <Offer />
            <TvNow />
        </main>
    );
}

export default Main;