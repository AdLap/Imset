import React from 'react';
import './FooterVectra.scss';

const FooterVectra = () => {
    return (
        <div className='footer__vectra'>
            <div className='footer__vectra__title'>
                aplikacja vectra
            </div>
            <div className='footer__vectra__box'>
                <div className='footer__vectra__icon'></div>
                <div className='footer__vectra__app'>
                    <span>
                        pobierz
                    </span><br />
                    aplikację
                </div>

            </div>
        </div>
    );
}

export default FooterVectra;