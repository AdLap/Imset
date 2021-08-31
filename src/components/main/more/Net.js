import React from 'react';
import Title from '../../utility/Title';
import NetIcons from './NetIcons';
import NetOffer from './NetOffer';
import './Net.scss';

const Net = () => {
    return (
        <div className='net'>
            <Title text='zyskaj więcej' />
            <NetIcons />
            <NetOffer />
        </div>
    );
}

export default Net;