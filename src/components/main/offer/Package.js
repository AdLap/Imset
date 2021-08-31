import React from 'react';
import tv from '../../../assets/tv.svg';
import net from '../../../assets/net.svg';
import phone from '../../../assets/phone.svg';
import mobile from '../../../assets/mobile.svg';
import Service from './Service';
import './Package.scss';


const Package = () => {
    return (
        <div className='package'>
            <Service icon={tv} item={`ulubione\nkanały tv`} />
            <Service icon={net} item={`prędkość\ninternetu`} />
            <Service icon={phone} item={`ilość minut\nna rozmowy`} />
            <Service icon={mobile} item={`internet\nmobilny`} />
        </div>
    );
}

export default Package;