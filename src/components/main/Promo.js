import React from 'react';
import Title from '../utility/Title';
import MainSubtitle from '../utility/MainSubtitle';
import './Promo.scss';

const Promo = () => {
    return (
        <section className='promo'>
            <Title text='pakiet 20 gb lte' color='#84b82a' />
            <MainSubtitle text='promocja' color='#675190' />
            <p className='promo__desc'>
                Dla tych, którzy nie wyobrażają sobie życia bez Internetu:
                <ul className='promo__list'>
                    <li className='promo__list__item'>
                        oglądaj filmy umieszczone w sieci
                    </li>
                    <li className='promo__list__item'>
                        ściągaj duże pliki
                    </li>
                    <li className='promo__list__item'>
                        korzystaj z poczty, komunikatora
                    </li>
                    <li className='promo__list__item'>
                        surfuj swobodnie
                    </li>
                </ul>
            </p>
            <div className='promo__price'>
                <div className='promo__price__slogan'>
                    swoboda<br />i mobilność za
                </div>
                <div className='promo__price__value'>
                    50<span className='promo__price__value__cash'>
                        zł
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Promo;