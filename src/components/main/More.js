import React, { useEffect, useState } from 'react';
import Net from './more/Net';
import NetSecond from './more/NetSecond';
import NetThird from './more/NetThird';
import Paginator from './more/Paginator';
import './More.scss';

const More = () => {
    const [counter, setCounter] = useState(0);
    const [content] = useState([
        <Net />,
        <NetSecond />,
        <NetThird />
    ]);
    console.log('counter::', counter)

    // useEffect(() => {
    //     const interval = setInterval(() => {
           
    //         if (counter <= 2) {
    //             setCounter(counter => counter + 1)
    //         } else {
    //             setCounter(0)
    //         }

    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [])

    return (
        <section className='more'>
            {content[counter]}
            <Paginator />
        </section>
    );
}

export default More;
