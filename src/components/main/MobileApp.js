import React from 'react';
import Title from '../utility/Title';
import './MobileApp.scss';

const MobileApp = () => {
    return (
        <section className='mobile__app'>
            <Title text='aplikacja' color='#675190' />
            <p className='mobile__app__desc'>
                Lorem ipsum dolor sit amet enim. Etiam
                ullamcorper. Suspendisse a pellentesque
                dui, non felis.
            </p>
            <div className='mobile__app__icons'>
                <a href='#' title='android' className='mobile__app__icons__item'></a>
                <a href='#' title='apple' className='mobile__app__icons__item'></a>
                <a href='#' title='windows' className='mobile__app__icons__item'></a>
            </div>
        </section>
    );
}

export default MobileApp;