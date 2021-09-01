import React from 'react';
import FooterVectra from './FooterVectra';
import FooterSale from './FooterSale';
import FooterBottom from './FooterBottom';
import './FooterLeft.scss';

const FooterLeft = () => {
    return (

        <div className='footer__left'>
            <FooterVectra />
            <FooterSale />
            <FooterBottom />
        </div>
    );
}

export default FooterLeft;