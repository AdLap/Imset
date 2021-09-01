import { faChevronRight, faComments } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Title from '../utility/Title';
import MainSubtitle from '../utility/MainSubtitle';
import Avatar from './support/Avatar';
import Recommended from './support/Recommended';
import './Support.scss';

const Support = () => {
    return (
        <section className='support'>
            <Title text='nasz support' />
            <MainSubtitle text={`propozycje naszego tv-maniaka\nna weekend`} color='#84b82a' />
            <div className='support__desc'>
                <Avatar />
                <div className='support__recommended'>
                    <Recommended text='zobacz co kuba znalazł ciekawego w tv na weekend' icon={faChevronRight} />
                    <Recommended text='podyskutuj z nim o filmach już w piątek 15.98.2014' icon={faComments} />
                </div>
            </div>
            <p className='support__offer'>
                Zostań naszym ekspertem i poprowadź przedweekendowy chat z użytkownikami
            </p>
        </section>
    );
}

export default Support;