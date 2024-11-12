import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Qualities from "../../components/qualities/Qualities";
// import Cards from '../../constant/cards/Cards'
import Bestseller from "../../components/bestsellers/Bestseller";
import NewArrivals from "../../components/newarrivals/NewArrivals";
import TopDeals from "../../components/topdeals/TopDeals";
// import TopCollections from '../../components/topcollections/TopCollections'
import Footer from "../../components/footer/Footer";
import HomeServices from "../../components/homeservices/HomeServices";
import Discount from "../../components/discount/Discount";
import HomeReviews from "../../components/homereviews.jsx/HomeReviews";

import ReactGA from "react-ga";
import { Link, useLocation } from "react-router-dom";

import "./home.css";
import Homecoming from "../../components/homecoming/Homecoming";
import AboutImgs from "../../components/aboutimgs/AboutImgs";
import { Button, Modal } from "react-bootstrap";
import Stats from "../../components/stats/Stats";
import GoogleReviews from "../../components/googlereviews/GoogleReviews";
import mission from "../../assets/abt3.jpg";
import gal from "../../assets/g2.jpg";
import serv from "../../assets/servbanner2.jpeg";
const Home = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="aboutpage-mvs-container home-about">
          <div
            className="aboutpage-mvs-img"
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="1000"
          >
            <img src={mission} alt="" />
           
          </div>
          <div
            className="aboutpage-mvs"
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="1000"
          >

            <h4>ABOUT US</h4>
            <p>
            Total Trailer is dedicated to keeping you on the road with dependable repair services and top-quality trailer parts. Whether you need a minor fix or a major overhaul, our skilled mechanics are here to ensure that every trailer leaving our facility is road-ready and safe.       
            With years of experience and a commitment to customer satisfaction, we strive to deliver not just quality repairs but peace of mind. Each job reflects our dedication to excellence, so you can trust that your trailer is in expert hands.

                 </p>
          
       
     
            <p>
               </p>
            <div className="home-button">
              <p>Learn More About Us</p>
            </div>
          </div>
        </div>
        <div className="aboutpage-mvs-container home-serv">
        <div className="aboutpage-mvs"
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="1000"
          >

            <h4>OUR SERVICES</h4>
            <p>
            At Total Trailer, we provide a comprehensive range of trailer repair and maintenance services tailored to keep your equipment in optimal condition. Our services include axle repairs, brake and drum replacements, electrical work, suspension adjustments, and lube jobs, all executed with meticulous attention to detail. Whether you need routine maintenance or extensive repairs, our skilled technicians are equipped to handle every aspect with the highest standards of safety and quality.
            </p>
          
       
            {/* <p>At Total Trailer, our core values are rooted in quality, integrity, and customer-centered service. We prioritize safety in every repair,
               ensuring reliable and lasting results for our clients. Driven by innovation, we stay updated with the latest repair techniques, building trust and delivering excellence with every project.
               </p> */}
            <div className="home-button">
              <p>View All Services</p>
            </div>
          </div>
          <div
            className="aboutpage-mvs-img"
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="1000"
          >
            <img src={serv} alt="" />
           
          </div>
       
        </div>
        <div className="aboutpage-mvs-container ">
          <div
            className="aboutpage-mvs-img"
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="1000"
          >
            <img src={gal} alt="" />
           
          </div>
          <div
            className="aboutpage-mvs"
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="1000"
          >

            <h4>GALLERY</h4>
            <p>
            Our gallery showcases the transformation we bring to each trailer through our expert repair services. From before-and-after photos to detailed shots of specialized work, you’ll see the dedication our team puts into each job. Whether it’s restoring a worn suspension, updating electrical systems, or enhancing the overall look with custom lighting, our gallery highlights the quality and care we bring to every project. Take a look and discover how we breathe new life into trailers, ensuring they’re safe, reliable, and ready for the road.

                 </p>
           
            <div className="home-button">
              <p>View our gallery</p>
            </div>
          </div>
        </div>





      {/* <div className="home-bestseller">
        <Bestseller />
      </div> */}
      {/* <Homecoming /> */}
      {/* <HomeServices /> */}
      {/* <div className="home-bestseller">
        <NewArrivals />
      </div> */}
 
      {/* <AboutImgs /> */}
      {/* <Discount /> */}
      <Stats />
      <div className="about-reviews">
        <GoogleReviews />
      </div>
      {/* <div className="home-bestseller">
        <TopDeals />
      </div> */}

      {/* <Qualities /> */}
      <Footer />
    </div>
  );
};

export default Home;
