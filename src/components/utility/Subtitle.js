import React from 'react';
import './Subtitle.scss';

const Subtitle = ({ text, color }) => {
    return (
        <h2 className='subtitle' style={{color: color}}>{text}</h2>
    );
}

export default Subtitle;