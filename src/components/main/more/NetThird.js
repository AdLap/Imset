import React from 'react';
import Title from '../../utility/Title';
import NetIcons from './NetIcons';
import NetOffer from './NetOffer';
import './NetThird.scss';

const NetThird = () => {
    return (
        <div className='net'>
            <Title text='zyskaj najwięcej' />
            <NetIcons />
            <NetOffer />
        </div>
    );
}

export default NetThird;