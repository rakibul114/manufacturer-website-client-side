import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ProjectDeal from './ProjectDeal';
import Reviews from './Reviews';
import Subscribe from './Subscribe';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
            <ProjectDeal></ProjectDeal>
            <Footer></Footer>
        </div>
    );
};

export default Home;