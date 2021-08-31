import React from 'react';
import More from './More';
import Vod from './Vod';
import './Main.scss';

const Main = () => {
    return (
        <main className='main container'>
            <More />
            <Vod />
        </main>
    );
}

export default Main;