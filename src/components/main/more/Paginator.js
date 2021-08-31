import React from 'react';
import './Paginator.scss';

const Paginator = () => {
    return (
        <div className='paginator'>
            <div className='paginator__page-active'>{null}</div>
            <div className='paginator__page'>{null}</div>
            <div className='paginator__page'>{null}</div>
        </div>

    );
}

export default Paginator;