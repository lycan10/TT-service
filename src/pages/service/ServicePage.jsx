import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import image from "../../assets/servbanner.jpeg";
import "aos/dist/aos.css";
import AOS from "aos";
import mission from "../../assets/abt3.jpg";
import vision from "../../assets/vision.png";
import banner from "../../assets/abt5.jpg";
import banner2 from "../../assets/abt66.jpg";

import s1 from "../../assets/side1.png";
import s2 from "../../assets/side2.png";
import s3 from "../../assets/side3.png";

// import {AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"



import "./servicepage.css";

import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";

import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";

import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import AboutImgs from "../../components/aboutimgs/AboutImgs";
import GoogleReviews from "../../components/googlereviews/GoogleReviews";
import Stats from "../../components/stats/Stats";

const ServicePage = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="service" id="service">
      <Navbar />
      <div className="service-container">
        <div className="contact-header-image">
          <div className="banner-opacity"></div>
          <img src={image} alt="" />
          <div className="contact-header-text">
            <h1>Services</h1>
          </div>
        </div>
        <div className="service-content-container">
       
          <div className="service-content">
            <div
              className="service-content-title"
              // data-aos="fade-up"
              // data-aos-easing="linear"
              // data-aos-duration="1000"
            >
              <div
                className="services-title"
                style={{ marginBottom: "0" }}
              >
               <h1>Total peace of mind is our mantra. </h1>
               <p>
              At Total Trailer, we provide a comprehensive range of trailer repair and maintenance services tailored to keep your equipment in optimal condition. Our services include axle repairs, brake and drum replacements, electrical work, suspension adjustments, and lube jobs, all executed with meticulous attention to detail. Whether you need routine maintenance or extensive repairs, our skilled technicians are equipped to handle every aspect with the highest standards of safety and quality.
             </p>
              </div>
              <div className="services-content-img">
                <img src={banner} alt="" />
              </div>
              <div className="services-content-list-container">
                <div className="services-content-list">
                <h3>1. Lube job</h3>
                <p>Regular lubrication helps to reduce friction, prevent wear, and prolong the lifespan of moving parts, ensuring your trailer operates smoothly on the road.</p>
                </div>
                <div className="services-content-list">
                <h3>2. Suspension</h3>
                <p>
                Suspension repairs maintain the balance, stability, and handling of your trailer, ensuring safe towing and a comfortable ride, especially under heavy loads.
                </p>
                </div>
                <div className="services-content-list">
                <h3>3. Electrical</h3>
                <p>
                Our electrical services cover wiring, lighting, and connection issues to make sure all electrical systems work reliably, enhancing safety and visibility on the road.
                </p>
                </div>
                <div className="services-content-list">
                <h3>4. Brakes and Drums</h3>
                <p>
                We offer brake and drum repairs or replacements to ensure responsive braking, giving you the control and stopping power needed for secure towing.
                </p>
                </div>
                <div className="services-content-img">
                <img src={banner2} alt="" />
              </div>
                <div className="services-content-list">
                <h3>5. Door Cable</h3>
                <p>
                Replacing or repairing door cables allows your trailer doors to open and close smoothly, preventing unnecessary strain on the door mechanism.
                </p>
                </div>
               
                <div className="services-content-list">
                <h3>6. Axle Replacement</h3>
                <p>
                We provide full axle replacement services for worn or damaged axles, restoring your trailer's stability and load-carrying capacity.
                </p>
                </div>
              
                <div className="services-content-list">
                <h3>7. Lights</h3>
                <p>
                Proper lighting is essential for visibility and compliance with regulations; we repair and replace trailer lights to keep you safe on the road.
                </p>
                </div>
                <div className="services-content-list">
                <h3>8. Tire Mounting</h3>
                <p>
                Our tire mounting service includes installation and balancing, ensuring safe and even tire wear for optimal performance.
                </p>
                </div>
                <div className="services-content-list">
                <h3>8. Jack Mounting</h3>
                <p>
                We offer jack mounting services to ensure safe, stable support when loading or unloading your trailer, minimizing the risk of accidents.
                </p>
                </div>
              </div>

     
              
            
         
            </div>
          </div>
          <div className="services-sidelist-container">
 <div className="services-sidelist">
  <div className="services-sidelist-image">
    <img src={s2} alt="" />
  </div>
  <div className="services-sidelist-text">
    <h2>ROUTINE MAINTENACE</h2>
    <p>Keep your trailer running smoothly with regular check-ups, covering everything from lube jobs to axle replacements.</p>
  </div>
 </div>
 <div className="services-sidelist">
  <div className="services-sidelist-image">
    <img src={s1} alt="" />
  </div>
  <div className="services-sidelist-text">
    <h2>DIAGNOSTICS SERVICE</h2>
    <p>Quickly identify and resolve issues with our expert diagnostics. We assess every component to ensure optimal performance and safety.</p>
  </div>
 </div>
 <div className="services-sidelist">
  <div className="services-sidelist-image">
    <img src={s3} alt="" />
  </div>
  <div className="services-sidelist-text">
    <h2>BOOK AN APPOINTMENT </h2>
    <p> Ready to schedule your service? Call us at (248) 853-0033 to book an appointment. Our team is here to provide you with flexible options to fit your schedule.</p>
  </div>
 </div>
 </div>
        
        </div>

        <Stats />
        {/* <AboutImgs /> */}

        {/* <div className="aboutpage-services">
          <div className="aboutpage-services-title">
            <div className="contact-vertical"></div>
            <h1>Our Services</h1>
            <div
              className="contact-vertical"
              style={{ marginLeft: "0.5rem" }}
            ></div>
          </div>
          <p>
            At Total Trailer, we take pride in offering a wide range of services
            tailored to meet the unique needs of RV and trailer enthusiasts. Our
            commitment to excellence extends to every aspect of our service
            offerings, ensuring that your RV and trailer experience is filled
            with peace of mind.
          </p>
          <div className="about-services-details">
            <div className="aboutpage-mvs services-mvs">
              <img src={icon1} alt="" />
              <h4>On-Time Delivery</h4>
              <p>
                Count on Total Trailer for not only high-quality trailer
                solutions but also for a service that respects your time and
                convenience. Your journey matters to us, and we're here to make
                sure it begins right on time.
              </p>
            </div>
            <div className="aboutpage-mvs services-mvs">
              <img src={icon2} alt="" />
              <h4>Direct Replacement Parts</h4>
              <p>
                We provide a comprehensive selection of direct replacement parts
                to keep your trailer in optimal condition. From essential
                components to specialized items, we've got you covered.
              </p>
            </div>
            <div className="aboutpage-mvs services-mvs">
              <img src={icon3} alt="" />
              <h4>Expert Advice</h4>
              <p>
                Our experienced team is here to offer guidance and support.
                Whether you're looking for recommendations, installation tips,
                or troubleshooting assistance, we're just a call or message
                away.
              </p>
            </div>
          </div>
        </div> */}

        <div className="about-reviews">
<GoogleReviews />
        </div>

        {/* <div className='aboutpage-team-overall'>
          <div className="aboutpage-team-container">
            <div className="about-team-title" data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000">
            <div className="aboutpage-services-title">
          <div className="contact-vertical" ></div>
            <h1>Our Team</h1>
            <div className="contact-vertical" style={{marginLeft:"0.5rem"}}></div>
          </div>
                  <p>Meet the driving force behind our success – the talented individuals who transform ideas into reality, creativity into innovation, and passion into excellence.</p>
            </div>
            <div className="aboutpage-team-content">
              <div className="aboutpage-team"  data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000">
                <div className="aboutpage-team-image">
                  <img src={team1} alt="Team" />
                </div>
                <h1>John doe </h1>
                <p>CEO</p>
              </div>
              <div className="aboutpage-team"  data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000">
                <div className="aboutpage-team-image">
                  <img src={team2} alt="Team" />
                </div>
                <h1>Eleanor smith</h1>
                <p>Project Director</p>
              </div>
              <div className="aboutpage-team"  data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000">
                <div className="aboutpage-team-image">
                  <img src={team3} alt="Team" />
                </div>
                <h1>Paige hilton</h1>
                <p>Director of Communications</p>
              </div>
            </div>
          </div>
        </div> */}
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
