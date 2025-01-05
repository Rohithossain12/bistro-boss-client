import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category/Category';
import PopularMenu from '../Components/PopularMenu';
import FeaturedItems from '../Components/Featured/FeaturedItems';
import Testimonial from '../Components/Testimonial';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Bistro Boss | Home</title>
           </Helmet>
            
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <FeaturedItems></FeaturedItems>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;