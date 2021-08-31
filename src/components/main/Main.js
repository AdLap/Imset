import React from 'react';
import More from './More';
import Vod from './Vod';
import './Main.scss';
import Offer from './Offer';

const Main = () => {
    return (
        <main className='main container'>
            <More />
            <Vod />
            <Offer />
        </main>
    );
}

export default Main;