import React from 'react';
import { motion } from 'framer-motion';
import Nav from './Nav';
import NavVod from './NavVod';
import NavTv from './NavTv';
import './Menu.scss';

const Menu = ({ promo }) => {
    return (
        <motion.div
            className='menu'
            initial={{x: -500}}
            animate={{x: 0}}
            transition={{ duration: .3 }}
        >
            <Nav />
            <NavVod />
            <NavTv />
        </motion.div>
    );
}

export default Menu;
