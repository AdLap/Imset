import React from 'react';
import './MainSubtitle.scss';

const MainSubtitle = ({text, color}) => {
    return (
        <h3 className='main__subtitle' style={{color: color}}>
            {text}
        </h3>
    );
}

export default MainSubtitle;
