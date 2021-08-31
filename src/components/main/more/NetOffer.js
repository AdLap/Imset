import React from 'react';
import './NetOffer.scss';

const NetOffer = () => {
    return (
        <div className='net__offer'>
            <span className='net__offer__title'>
                kup internet,
            </span>
            <span className='net__offer__desc'>
                a <span className='net__offer__desc__hbo'>hbo</span>go
            </span>
            <span className='net__offer__desc__second'>
                dostaniesz za
            </span>
            <div className='net__offer__price'>
                1zł
            </div>
        </div>
    )
}

export default NetOffer;