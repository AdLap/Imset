import React from 'react';
import './FooterRight.scss';

const FooterRight = () => {
    return (
        <div className='footer__right'>
            <div className='footer__right__title'>
                centrum obsługi klienta
            </div>
            <div className='footer__right__phone'>
                zadzwoń
            </div>
            <div className='footer__right__phone__nr'>
                800 080 800
            </div>
            <div className='footer__right__mobile'>
                z telefonu komórkowego
            </div>
            <div className='footer__right__mobile__nr'>
                58 500 65 00
            </div>
            <div className='footer__right__info'>
                (wg stawek operatorów)
            </div>
        </div>

    );
}

export default FooterRight;