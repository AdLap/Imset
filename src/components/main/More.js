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

    const reset = (int) => {
        clearInterval(int);
        setCounter(0);
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            counter === (content.length - 1) ? reset(interval) : setCounter(counter => counter + 1);
        }, 3000);

        return () => clearInterval(interval);

    }, [counter])

    return (

        <section className='more'>
            {content[counter]}
            <Paginator nr={counter} />
        </section>
    );
}

export default More;
