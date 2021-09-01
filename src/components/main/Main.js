import React from 'react';
import More from './More';
import Vod from './Vod';
import Offer from './Offer';
import TvNow from './TvNow';
import Promo from './Promo';
import Support from './Support';
import './Main.scss';


const Main = () => {
    return (
        <main className='main container'>
            <More />
            <Vod />
            <Offer />
            <TvNow />
            <Promo />
            <Support />
        </main>
    );
}

export default Main;