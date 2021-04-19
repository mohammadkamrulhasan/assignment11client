import React from 'react';
import Contact from '../../Contact/Contact';
import Project from '../../Project/Project';
import Review from '../../Review/Review';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Feature></Feature>
            <Project></Project>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;