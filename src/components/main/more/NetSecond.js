import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../utility/Title';
import NetIcons from './NetIcons';
import NetOffer from './NetOffer';
import './NetSecond.scss';

const NetSecond = () => {
    return (
        <motion.div
            className='net__second'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            <Title text='zyskaj jeszcze więcej' />
            <NetIcons />
            <NetOffer />
        </motion.div>
    );
}

export default NetSecond;