import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='container-fluid header-container'>
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;