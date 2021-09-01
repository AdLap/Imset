import React from 'react';
import './FooterSale.scss';

const FooterSale = () => {
    return (
        <div className='footer__sale'>
            <div className='footer__sale__title'>
                infolinia sprzedażowa
            </div>
            <div className='footer__sale__phone'>
                zadzwoń lub wyślij sms
            </div>
            <div className='footer__sale__phone__nr'>
                601 601 601
            </div>
            <div className='footer__sale__info'>
                (wg stawek operatorów)
            </div>
        </div>
    );
}

export default FooterSale;