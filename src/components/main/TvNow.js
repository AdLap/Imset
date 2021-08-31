import React, { useState } from 'react';
import Title from '../utility/Title';
import Stat from '../utility/Stat';
import TvProgram from './tv/TvProgram';
import './TvNow.scss';

const TvNow = () => {
    const [userNumb, setUserNumb] = useState(258)

    return (
        <section className='now'>
            <div className='now__title'>
                <Title text={`teraz\nw tv online`} />
                <Stat number={userNumb} title='teraz ogląda' />
            </div>
            <TvProgram />
        </section>
    );
}

export default TvNow;