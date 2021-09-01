import React from 'react';
import avatar from '../../../assets/avatar.png';
import './Avatar.scss';

const Avatar = () => {
    return (
        <div className='avatar'>
          <div className='avatar__box'>
              <img src={avatar} alt='avatar' className='avatar__box__img' />
          </div>
            
        </div>
    );
}

export default Avatar;