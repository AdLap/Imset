import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import programList from '../../utility/programList';
import './TvProgram.scss';

const TvProgram = () => {
    const [currProgram, setCurrProgram] = useState(programList[0]);

    return (
        <div className='program'>
            <div className='program__prev'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className='program__play'>
                <FontAwesomeIcon icon={faPlay} />
            </div>
            <div className='program__next'>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <h3 className='program__title'>
                {currProgram.title}
            </h3>
            <h4 className='program__chanel'>
                {currProgram.chanel}
            </h4>
        </div>
    );
}

export default TvProgram;
