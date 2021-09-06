import React from 'react';
import './Paginator.scss';

const Paginator = ({ nr }) => {
    return (
        <div className='paginator'>
            <div className={nr === 0 ? 'paginator__page-active' : 'paginator__page'}>{null}</div>
            <div className={nr === 1 ? 'paginator__page-active' : 'paginator__page'}>{null}</div>
            <div className={nr === 2 ? 'paginator__page-active' : 'paginator__page'}>{null}</div>
        </div>
    );
}

export default Paginator;