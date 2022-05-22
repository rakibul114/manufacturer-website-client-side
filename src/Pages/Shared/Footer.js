import React from 'react';
import greenLogo from '../../assets/timbecon-logo-green.png';

const Footer = () => {
    return (
        <div className='bg-secondary h-96 py-10 mt-28'>
            <div>
            <img style={{height: '40px'}} src={greenLogo} alt="" />
            </div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Footer;