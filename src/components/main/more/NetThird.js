import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../utility/Title';
import NetIcons from './NetIcons';
import NetOffer from './NetOffer';
import './NetThird.scss';

const NetThird = () => {
    return (
        <motion.div
            className='net__third'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            <Title text='zyskaj najwięcej' />
            <NetIcons />
            <NetOffer />
        </motion.div>
    );
}

export default NetThird;