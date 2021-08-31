import React from 'react';
import Title from '../utility/Title';
import MainSubtitle from '../utility/MainSubtitle';
import './Offer.scss';
import Package from './offer/Package';

const Offer = () => {
    return (
        <section className='offer'>
            <Title text='stwórz swój własny pakiet' />
            <MainSubtitle text='telewizja - internet - telefon' color='#ffffff' />
            <Package />
            <button className='offer__btn'>
                stwórz&nbsp;pakiet
            </button>
            <div className='offer__other'>
                lub wybierz pakiet, przygotowany przez nas
            </div>
        </section>
    );
}

export default Offer;
