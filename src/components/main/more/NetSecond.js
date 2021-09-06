import React from 'react';
import Title from '../../utility/Title';
import NetIcons from './NetIcons';
import NetOffer from './NetOffer';
import './NetSecond.scss';

const NetSecond = () => {
    return (
        <div className='net'>
            <Title text='zyskaj jeszcze więcej' />
            <NetIcons />
            <NetOffer />
        </div>
    );
}

export default NetSecond;