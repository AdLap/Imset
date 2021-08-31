import React from 'react';

import './Service.scss';

const Service = ({ icon, item }) => {
    return (
        <div className='service'>
            <div className='service__icon'>
                <div className='service__icon__bg'>
                    <img src={icon} alt='offer' className='service__icon__bg__pic' />
                </div>
            </div>
            <div className='service__choice'>
                wybierz
            </div>
            <div className='service__item'>
                {item}
            </div>
        </div>
    );
}

export default Service;