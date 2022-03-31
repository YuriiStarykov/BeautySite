import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className='mainLogo'>
            <div className='logo'><img src='https://i.pinimg.com/564x/a1/c2/c4/a1c2c40dc5cf0b9ff6ed6def3e06cd00.jpg' alt='Beauty-Shop'></img></div>
            <div className='number'><a>+380678050672</a></div>
            <div className='email'><a>info.beauty.ua</a></div>
            <div className='map'><a>Львів, вул.Городоцька 56</a></div>
        </div>

    );
};

export default Logo;