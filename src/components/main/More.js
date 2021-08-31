import React from 'react';
import Net from './more/Net';
import Paginator from './more/Paginator';
import './More.scss';

const More = () => {
    return (
        <section className='more'>
            <Net />
            <Paginator />
        </section>
    );
}

export default More;