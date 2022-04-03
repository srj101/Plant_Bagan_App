import React from 'react';
import BoCarousel from '../Carousel/BoCarousel';
import "./Home.css"
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import SectionTitle from "../SectionTitle/SectionTitle";
import NewsSection from '../NewsSection/NewsSection'
import CourseCarousel from '../CourseCarousel/CourseCarousel';
const Home = () => {
    return (
        <div className='hompage_area'>
           <BoCarousel/>

            <SectionTitle  title="VIDEOS FOR PLANT BAGAN"/>
            <VideoCarousel/>
            <SectionTitle  title="NEWS FOR PLANT ROOM"/>
            <NewsSection/>
            <SectionTitle  title="COURSES FOR PLANT ROOM"/>
            <CourseCarousel/>
        </div>
    );
};

export default Home;