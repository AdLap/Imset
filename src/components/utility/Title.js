import React from 'react';
import './Title.scss';

const Title = ({ text, color }) => {
    return (
        <h2 className='title' style={{color: color}}>
            {text}
        </h2>
    );
}

export default Title;
