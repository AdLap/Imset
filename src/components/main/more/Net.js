import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../utility/Title';
import NetIcons from './NetIcons';
import NetOffer from './NetOffer';
import './Net.scss';

const Net = () => {
    return (
        <motion.div
            className='net'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            <Title text='zyskaj więcej' />
            <NetIcons />
            <NetOffer />
        </motion.div>
    );
}

export default Net;