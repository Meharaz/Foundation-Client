import React from 'react';
import NavBar from '../Components/Shared/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;