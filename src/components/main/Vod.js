import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Title from '../utility/Title';
import VodMovie from './vod/VodMovie';
import vodOnRequest from '../utility/vodRequest';
import Stat from '../utility/Stat';
import './Vod.scss';

const Vod = () => {
    const [currMovie, setCurrMovie] = useState(vodOnRequest[0])
    const [usersNumber, setUsersNumber] = useState(125);

    return (
        <section className='vod'>
            <Title text='VOD' />
            <h3 className='vod__subtitle'>
                video na żądanie
            </h3>
            <div className='vod__prev'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className='vod__next'>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <VodMovie movie={currMovie} />
            <Stat number={usersNumber} title='film obejrzy' />
        </section>
    );
}

export default Vod;