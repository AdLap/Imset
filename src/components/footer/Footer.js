import React from 'react';
import './Footer.scss';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <FooterLeft />
                <FooterRight />
            </div>
        </footer>
    );
}

export default Footer;