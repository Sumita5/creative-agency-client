import React from 'react';
import Clients from '../Clients/Clients';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header/>
            <Clients/>
            <Services/>
            <Works/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;