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
            initial={{y: +1000}}
            animate={{y: 0}}
            transition={{ duration: .5 }}
        >
            <Nav />
            <NavVod />
            <NavTv />
        </motion.div>
    );
}

export default Menu;
