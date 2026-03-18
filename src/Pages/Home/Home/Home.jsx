import React from 'react';
import Banner from '../Banner/Banner';
import AboutSection from '../AboutSection/AboutSection';
import Kind from '../Kind.jsx/Kind';
import OngoingProjects from '../OngoingProjects.jsx/OngoingProjects';
import DonationFunds from '../DonationFund/DonationFund';
import RegistrationForms from '../RegistrationForms/RegistrationForms';
import Gallery from '../Gallery/Gallery';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutSection/>
            <Kind/>
            <OngoingProjects/>
            <DonationFunds/>
            <RegistrationForms/>
            <Gallery/>
            <Blogs/>
        </div>
    );
};

export default Home;