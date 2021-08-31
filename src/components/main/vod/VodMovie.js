import React from 'react';
import './VodMovie.scss';

const VodMovie = ({ movie }) => {
    
    return (
        <div className='vod__movie'>
            <h3 className='vod__movie__title'>
                {movie.title}
            </h3>
            <div className='vod__movie__info'>
                <div className='vod__movie__type'>
                    {movie.type}
                </div>
                <div className='vod__movie__price'>
                    {movie.price} zł
                </div>
            </div>
        </div>
    );
}

export default VodMovie;
