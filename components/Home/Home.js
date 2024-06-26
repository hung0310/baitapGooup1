import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Content/Carousel/Carousel";
import Courses from "./Content/Courses/Courses";
import RoadMap from "./Content/RoadMap/RoadMap";
import Strategy from "./Content/Strategy/Strategy";
import Chance from "./Content/Chance/Chance";
import Comment from "./Content/Comment/Comment";
import Pricing from "./Content/Pricing/Pricing";
import Blog from "./Content/Blog/Blog";

const Home = () => {
    return (
        <>
            <Carousel />
            <Courses />
            <RoadMap />
            <Strategy />
            <Chance />
            <Comment />
            <Pricing />
            <Blog />
        </>
    );
};

export default Home;