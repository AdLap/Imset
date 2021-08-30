import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './Panel.scss';

const Panel = () => {
    return (
        <ul className='panel'>
            <li className='panel__item'>
                centrum obsługi klienta
                <a href='#' title='CENTRUM OBSŁUGI KLIENTA'>
                    <span className='panel__item__phone'>
                        <span className='panel__item__icon'>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </span>
                        800 080 800
                    </span>
                </a>
            </li>
            <li className='panel__item'>
                <a href='#' title='SZUKAJ'>
                    <span className='panel__item__icon'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    szukaj
                </a>
            </li>
            <li className='panel__item'>
                <a href='#' title='PANEL ABONENTA'>
                    <span className='panel__item__icon'>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    strefa abonenta
                </a>
            </li>
        </ul>
    );
}

export default Panel;
