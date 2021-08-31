import React, { useState, useEffect } from 'react';
import navVodPromoList from '../utility/navVodPromoList';
import './NavVodPromo.scss';

const NavVodPromo = () => {
    const [promo] = useState(navVodPromoList);
    const [currPromo, setCurrPromo] = useState({});
    const idx = Math.floor(Math.random() * (promo.length + 1));

    useEffect(() => {
        setCurrPromo(promo[idx]);
    }, [])

    return (
        <div className='nav__vod__promo'>
            <div className='nav__vod__promo__pic'>
                <img src={currPromo.img} alt={currPromo.movie} className='nav__vod__promo__pic__img' />
            </div>
            <div className='nav__vod__promo__desc'>
                <h3 className='nav__vod__promo__title'>
                    dziś w promocji
                </h3>
                <p className='nav__vod__promo__movie'>
                    {currPromo.movie}
                </p>
                <p className='nav__vod__promo__type'>
                    {currPromo.type}
                </p>
                <div className='nav__vod__promo__price'>
                    {currPromo.price}
                    <a href='#' title='KUP' className='nav__vod__promo__buy'>kup</a>
                </div>
            </div>
        </div>
    );
}

export default NavVodPromo;