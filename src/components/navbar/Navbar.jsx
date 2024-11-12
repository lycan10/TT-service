import React, { useState, useContext, useEffect } from "react";
import logo from "../../assets/2.png";
import rrc from "../../assets/RRC.jpeg"
// import logo2 from "../../assets/1.jpg";

import "./navbar.css";
import { AiOutlineHeart } from "react-icons/ai";
// import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { PiClipboardText } from "react-icons/pi";
import phone from "../../assets/call2.png";
// import { bestSellerData, cartData } from "../../constant/data/data";
// import { BsTrash } from "react-icons/bs";
// import { userData } from "../../pages/helpers";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../AuthContext";
// import { useStrapi } from "../../hooks/useStrapi";
// import strapi from "../../functions/strapi";

import { IoCalendarOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

import Cart from "./Cart";
import { Link } from "react-router-dom";

import GA4React from 'ga-4-react';

const ga4react = new GA4React('G-757XGDZ579'); 

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [screenSize, setScreenSize] = useState('lg')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const {
    signOut,
    gatedAction,
    authState: { user, isSignout },
  } = useContext(AuthContext);

  // const [showModal, setShowModal] = useState(false);
  // const [value, setValue] = useState(1);

  // const { loading, data, error } = useStrapi("carts");

  // const cartData = data ? data?.data : [];
  //   const isLoggedIn = false; // Replace with your actual logic for checking if the user is logged in

  //   const userData = useFetch(url).data;
  // const user = userData && userData.length > 0 ? userData[0] : null;

  // const username = user ? user.username : '';
  // const firstName = user ? user.firstName : '';

  // const username = user?.username;

  const trackClickEvent = (eventCategory, eventAction, eventLabel) => {
    ga4react.gtag("event", eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
    });
  };

  const navigateToHome = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Home Button Clicked');
      window.location.href = newUrl;
    }
  };
  const navigateToAbout = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/about";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'About Button Clicked');
      window.location.href = newUrl;

    }
  };
  const navigateToProduct = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/products";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Product Button Clicked');
      window.location.href = newUrl;
    }
  };

  const navigateToSoon = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/soon";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = newUrl;
    }
  };
  const navigateToDeals = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/deals";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Deal Button Clicked');
      window.location.href = newUrl;
    }
  };
  const navigateToContact = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/contact";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Contact Button Clicked');
      window.location.href = newUrl;
    }
  };
  const navigateToService = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/services";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Contact Button Clicked');
      window.location.href = newUrl;
    }
  };
  const navigateToGallery = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/gallery";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Contact Button Clicked');
      window.location.href = newUrl;
    }
  };
  const navigateToAppointment = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/appointments";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Contact Button Clicked');
      window.location.href = newUrl;
    }
  };

  const navigateToWishlist = () => gatedAction(() => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/wishlist";

    // if (!isSignout) {
    // If the user is logged in, navigate to the wishlist page
    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Wishlist Button Clicked');
      window.location.href = newUrl;
    }
    // } else {
    //   // If the user is not logged in, show the modal
    //   setShowModal(true);
    // }
  });

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const navigateToRegister = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/register";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Register Button Clicked');
      window.location.href = newUrl;
    }
  };

  const navigateToLogin = () => {
    // Use the URL of the page you want to navigate to
    const newUrl = "/login";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Login Button Clicked');
      window.location.href = newUrl;
    }
  };

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const handleSubmit = () => {};

  const handleLogout = () => {
    // localStorage.setItem("user", "");
    signOut();
    const newUrl = "/Login";

    if (window.location.pathname === newUrl) {
      // If the user is already on the target page, perform a full page reload
      window.location.reload();
    } else {
      // Navigate to the new page
      trackClickEvent('Button', 'Click', 'Logout Button Clicked');
      window.location.href = newUrl;
    }
  };

  const phoneNumber = +12488530033; // Replace with your actual phone number

  const handleCallClick = () => {
    trackClickEvent('Button', 'Click', 'Call Button Clicked');
    window.location.href = `tel:${phoneNumber}`;
    
  };

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 500) {
        setScreenSize('sm');
      } else if (width <= 800) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };
  
    // Initial screen size setup
    updateScreenSize();
  
    // Add event listener for window resize
    window.addEventListener('resize', updateScreenSize);
  
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="navbar-top-welcome">
            <p>
              Welcome to{" "}
              <span style={{ color: "#3B67AF" }}> #TotalPeaceofMind</span>
            </p>
          </div>
          <div className="navbar-top-codes">
            <p>CAGE Code: 9Q994</p>
            <p>UEI: V4R2V4L9C6Y9</p>
          </div>
          {!isSignout ? (
            <div className="navbar-top-login-container">
              <div className="navbar-login">
                <FiUser className="navbar-icons" />
                <p>Hi {user.username}</p>
              </div>
              <div className="navbar-login" onClick={handleLogout}>
                <PiClipboardText className="navbar-icons" />
                <p>Logout</p>
              </div>
            </div>
          ) : (
            <div className="navbar-top-login-container">
              <div className="navbar-login" onClick={navigateToLogin}>
                <FiUser className="navbar-icons" />
                <p>Login</p>
              </div>
              <div className="navbar-login" onClick={navigateToRegister}>
                <PiClipboardText className="navbar-icons" />
                <p>Register</p>
              </div>
            </div>
          )}
        </div>
        <div className="navbar-middle">
          <div
            className="navbar-logo"
            onClick={navigateToHome}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="logo" />
          </div>
         
          <div className="navbar-middle-content">
          <div
            className="navbar-logo-rrc"
          >
            <img src={rrc} alt="logo" />
          </div>
            <div className="navbar-middle-tel">
              <div className="navbar-middle-tel-img">
                <img src={phone} alt="" />
              </div>
              <div className="navbar-tel-number" onClick={handleCallClick}>
                <h1>CALL US NOW</h1>
                <p>(248) 853-0033</p>
              </div>
            </div>
            {/* <Cart /> */}
          </div>
        </div>
        <div className="navbar-bottom">
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-cta" onClick={handleShow}>
            <h1>Book an appointment: </h1>
            <IoCalendarOutline className="icon2" />
          </div>
          {/* <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Please Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You need to log in to access the wishlist.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary" onClick={navigateToLogin}>
                Login
              </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      </div>
      <div className="navbar-mini">
        <div className="navbar-mini-container">
          {toggleMenu ? (
            <RiCloseLine
              color="#3B67AF"
              size={25}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#3B67AF"
              size={25}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div
              className={`navbar-menu_container ${
                toggleMenu ? "slide-bottom" : "slide-top"
              }`}
            >
              <div className="navbar-menu_links">
                <nav>
                  <ul>
                  <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
                    {!isSignout ? (
            <div className="navbar-top-login-container mini-login">
              <div className="navbar-login">
                <FiUser className="navbar-icons" />
                <p>Hi {user.username}</p>
              </div>
              <div className="navbar-login" onClick={handleLogout}>
                <PiClipboardText className="navbar-icons" />
                <p>Logout</p>
              </div>
            </div>
          ) : (
            <div className="navbar-top-login-container">
              <div className="navbar-login" onClick={navigateToLogin}>
                <FiUser className="navbar-icons" />
                <p>Login</p>
              </div>
              <div className="navbar-login" onClick={navigateToRegister}>
                <PiClipboardText className="navbar-icons" />
                <p>Register</p>
              </div>
            </div>
          )}
                    {/* <div className='navbar-socials'>
                                <Link to='/'><AiOutlineTwitter  className='social-logo'/></Link>
                                <Link to='/'><AiFillFacebook  className='social-logo'/></Link>
                                <Link to='/'><AiOutlineInstagram  className='social-logo'/></Link>
                            </div> */}
                  </ul>
                </nav>
              </div>
            </div>
          )}
           <div className="navbar-top-codes">
            <p>CAGE Code: 9Q994</p>
            <p>UEI: V4R2V4L9C6Y9</p>
          </div>
          <div className="navbar-cta" onClick={handleShow}>
            <h1>Book an appointment: </h1>
            <IoCalendarOutline className="icon2" />
          </div>
          {/* <Cart mobile /> */}
        </div>
        {/* <div className="navbar-mini-container">
          <div className="navbar-mini-hamburger">
            <RxHamburgerMenu />
          </div>
          <div className="navbar-mini-image">
            <img src={logo} alt="" />
          </div>
          <Cart mobile />
        </div> */}
      </div>
      <Modal show={show} onHide={handleClose} centered size={screenSize} className="booking-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-gallery-title">
              <h2>Book an appointment</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className="modal-booking container">
         <div className="modal-booking-title">
          <p>Schedule your next maintenance with our team of experts.</p>
         </div>
         <div className="modal-booking-form-container">
         <div className="modal-booking-form">
          <input type="text" placeholder="First name" />
         </div>
         <div className="modal-booking-form">
          <input type="text" placeholder="Last name" />
         </div>
         <div className="modal-booking-form">
          <input type="text" placeholder="Business name" />
         </div>
         <div className="modal-booking-form">
          <input type="text" placeholder="Email" />
         </div>
         <div className="modal-booking-form">
          <input type="text" placeholder="Phone" />
         </div>
         <div className="modal-booking-form">
         <select name="selectedFruit" defaultValue="Lube job">
          <option value="Lube job">Lube job</option>
          <option value="Suspension">Suspension</option>
          <option value="Electrical">Electrical</option>
          <option value="Brakes and drums">Brakes and drums</option>
          <option value="Axle replacement">Axle replacement</option>
          <option value="Jack mounting">Jack mounting</option>
          <option value="Tire mounting">Tire mounting</option>
          <option value="Door cables">Door cables</option>
          <option value="Fender replacement">Fender replacement</option>
          <option value="Lights">Lights</option>
        </select>
         </div>
         <div className="modal-booking-form">
          <input type="text" placeholder="Date" />
         </div>
         <div className="modal-booking-form">
          <input type="text" placeholder="Time" />
         </div>
         
         </div>
         <div className="modal-booking-textarea">
          <textarea type="text" placeholder="Message" />
         </div>
         <div className="modal-booking-button">
          <p>Submit</p>
         </div>
        </div>
        <Modal.Footer className='modal-footer'>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
