import React, { useState, useEffect } from 'react';
import './gallery.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import GalleryCards from '../../components/gallerycards/GalleryCards';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactCardFlip from 'react-card-flip';

import pic1 from '../../assets/photo/1.png';
import pic2 from '../../assets/photo/2.png';

import p1 from '../../assets/asset/1.png';
import p2 from '../../assets/asset/2.png';
import p3 from '../../assets/asset/3.png';
import p4 from '../../assets/asset/tire.png';
import p5 from '../../assets/asset/5.png';
import p6 from '../../assets/asset/6.png';
import p7 from '../../assets/asset/7.png';
import p8 from '../../assets/asset/8.png';
import p9 from '../../assets/asset/9.png';
import p10 from '../../assets/asset/10.png';
import p11 from '../../assets/asset/11.png';

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [flipStates, setFlipStates] = useState(Array(10).fill(false)); // Array for each card’s flip state
  const [screenSize, setScreenSize] = useState('lg');
  const handleClose = () => setShow(false);

  const handleShow = (service) => {
    setCurrentService(service);
    setShow(true);
  };

  const handleFlip = (index) => {
    setFlipStates((prevFlipStates) => {
      const newFlipStates = [...prevFlipStates];
      newFlipStates[index] = !newFlipStates[index];
      return newFlipStates;
    });
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

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const servicesListApi = [
    { title: "Lube job", image: p1, description: "Keep your trailer running smoothly with regular lubrication services." },
    { title: "Electrical", image: p3, description: "Comprehensive electrical repairs and maintenance for safe travels." },
    { title: "Suspension", image: p2, description: "Ensure a stable ride with expert suspension services." },
    { title: "Axle", image: p8, description: "Axle repair and maintenance to keep your trailer moving reliably." },
    { title: "Door cable", image: p7, description: "Replace worn door cables for smoother and safer operation." },
    { title: "Fender", image: p11, description: "Fender repairs and replacements to maintain your trailer’s appearance and safety." },
    { title: "Lights", image: p9, description: "Lighting solutions to ensure visibility and compliance on the road." },
    { title: "Brakes & Drums", image: p5, description: "Maintain stopping power with brake and drum services." },
    { title: "Tire mounting", image: p4, description: "Professional tire mounting for safe and efficient performance." },
    { title: "Jack mounting", image: p6, description: "Securely mounted jacks for convenient lifting and stability." },
    // { title: "Mobile repairs", image: p11, description: "On-the-go repairs wherever you need us." }
  ];
  

  return (
    <div className="gallery">
      <Navbar />
      <div className="gallery-container">
        <div className="gallery-title">
          <h1>Gallery</h1>
          <p>
            Our before-and-after photos highlight how our repair services bring new life to old or damaged trailers. 
            Whether it's fixing structural issues, addressing wear and tear, or adding custom features, you'll see firsthand 
            the transformation our skilled mechanics can achieve.
          </p>
        </div>

        <div className="gallerycards-container">
          {servicesListApi.map((service, index) => (
            <GalleryCards
              key={index}
              image={service.image}
              service={service.title}
              description={service.description}
              onClick={() => handleShow(service)}
            />
          ))}
        </div>
      </div>
      <Footer />

      <Modal show={show} onHide={handleClose} centered size={screenSize} className="main-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-gallery-title">
              <h2>{currentService?.title}</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className="modal-gallery-container">
          {Array.from({ length: 10 }, (_, index) => (
            <ReactCardFlip
              key={index}
              isFlipped={flipStates[index]}
              flipDirection="horizontal"
              className="card-flip"
            >
              {/* Front side */}
              <div className="modal-img" onClick={() => handleFlip(index)}>
                <img src={pic1} alt="Before" />
                <h3>Before</h3>
              </div>

              {/* Back side */}
              <div className="modal-img" onClick={() => handleFlip(index)}>
                <img src={pic2} alt="After" />
                <h3>After</h3>
              </div>
            </ReactCardFlip>
          ))}
        </div>
        <Modal.Footer className='modal-footer'></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;
