import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
FaCode,
FaPaintBrush,
FaServer,
FaSearch,
FaBullhorn,
FaChartLine,
FaShoppingCart,
FaLaptopCode,
FaCheckCircle,
FaRocket,
FaUsers,
FaLightbulb,
FaStar,
FaDollarSign,
FaShieldAlt,
FaThumbsUp
} from "react-icons/fa";
import "./Services.css";
import animated_video from "../../assets/animated_video.mp4";
import system_line_img from "../../assets/system_line_img.png";
import responsive_icon from "../../assets/responsive_icon.png";
import seo_icon from "../../assets/seo_icon.png";
import maintenance_icon from "../../assets/maintenance_icon.png";
import lowcost_icon from "../../assets/lowcost_icon.png";
import ApproachFormPopup from "../About/ApproachFormPopup";

git add src/assets/seo_icon.png
const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
const services = [
{ icon: <FaCode />, title: "Web Development", description: "Building responsive and dynamic websites with modern technologies." },
{ icon: <FaPaintBrush />, title: "UI/UX Design", description: "Designing intuitive and attractive interfaces for better user experience." },
{ icon: <FaServer />, title: "Backend Development", description: "Developing robust server-side applications and APIs." },
{ icon: <FaSearch />, title: "SEO Optimization", description: "Improving your website visibility and search engine ranking." },
{ icon: <FaBullhorn />, title: "Digital Marketing", description: "Promoting your brand through social media and online campaigns." },
{ icon: <FaChartLine />, title: "Analytics & Reporting", description: "Tracking and analyzing data to make informed business decisions." },
{ icon: <FaLaptopCode />, title: "Content Management", description: "Managing website content efficiently with CMS solutions like WordPress or custom CMS." },
{ icon: <FaShoppingCart />, title: "E-commerce Solutions", description: "Creating online stores with seamless shopping experience and secure payment integration." },
];

return ( <div className="company-services">
{/* React Helmet for SEO */} <Helmet> <title>Website Design Services in Hyderabad | Design Dynasty</title> <meta name="description" content="Design Dynasty offers top website design and development services in Hyderabad. Get responsive, creative, and SEO-friendly websites to grow your business." /> <meta name="keywords" content="website design, web development, SEO services, UI/UX design, digital marketing, Hyderabad web company" /> <meta name="robots" content="index, follow" /> <link rel="canonical" href="https://yourwebsite.com/services" />


    {/* Open Graph / Social Media */}
    <meta property="og:title" content="Website Design Services in Hyderabad | Design Dynasty" />
    <meta property="og:description" content="Top-notch website design, development, and SEO services in Hyderabad to boost your online presence." />
    <meta property="og:image" content="https://yourwebsite.com/og-image-services.png" />
    <meta property="og:url" content="https://yourwebsite.com/services" />
    <meta property="og:type" content="website" />
  </Helmet>
  {isPopupOpen && <ApproachFormPopup onClose={() => setIsPopupOpen(false)} />}
  {/* Hero Section */}
  <section className="Services-hero">
    <div className="Services-hero-content">
      <h1>Top Website Design <br /> Services in Hyderabad</h1>
      <p>
        We provide top-notch website design services in Hyderabad, creating visually appealing, responsive,
        and user-friendly websites that help businesses grow. Our team of expert designers crafts custom websites
        tailored to your brand, ensuring a seamless online experience and maximum engagement for your visitors.
      </p>
      <a href="#contact" className="btn About-Design-Dynasty_Choose-btn_services" onClick={() => setIsPopupOpen(true)}>Get Started</a>
    </div>
  </section>

  {/* Services Cards Section */}
  <section className="services-page">
    <video autoPlay loop muted playsInline className="bg-video">
      <source src={animated_video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="container content-overlay">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card-1">
            <div className="service-icon-1">{service.icon}</div>
            <h3 className="service-title-1">{service.title}</h3>
            <p className="service-description-1">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Intro Section */}
  <div className="services-intro-section">
     {/* Floating Circles */}
  <span className="circle-icon"></span>
  <span className="circle-icon"></span>
  <span className="circle-icon"></span>
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left Image */}
      <div className="col-md-5 text-center">
        <img 
          src={system_line_img} 
          alt="Website Designing System" 
          className="intro-image"
        />
      </div>

      {/* Right Content */}
      <div className="col-md-7 content-wrapper">
        <h2 className="intro-title">
          Affordable & Creative Website Designing Services
        </h2>

        <p className="intro-text">
          We are a leading web designing company in Hyderabad, dedicated to building
          modern, responsive, and custom websites that reflect your brand’s vision.
          Our goal is to transform your ideas into a powerful online presence that
          attracts visitors, builds trust, and drives business growth. From startups
          to established enterprises, our web development services help you boost
          sales, strengthen brand visibility, and deliver an engaging user experience.
        </p>
      </div>

    </div>
  </div>
</div>


  {/* Features Section */}
  <div className="services-about-section">
    <div className="container">
      <h3 className="sub-title">Our Features</h3>
      <div className="features-cards">
        <div className="feature-card">
          <img src={maintenance_icon} alt="Maintenance Icon" style={{ width: '24px', height: '24px' }} />
          <h4>Free Website Maintenance</h4>
          <p>Enjoy hassle-free support and updates at no extra cost.</p>
        </div>
        <div className="feature-card">
          <img src={lowcost_icon} alt="Cost-Effective Icon" style={{ width: '24px', height: '24px' }} />
          <h4>Cost-Effective Solutions</h4>
          <p>High-quality websites at affordable prices.</p>
        </div>
        <div className="feature-card">
          <img src={seo_icon} alt="SEO Icon" style={{ width: '24px', height: '24px' }} />
          <h4>SEO-Friendly Websites</h4>
          <p>Boost your visibility with optimized site structures.</p>
        </div>
        <div className="feature-card">
          <img src={responsive_icon} alt="Responsive Icon" style={{ width: '24px', height: '24px' }} />
          <h4>Responsive Design</h4>
          <p>Seamlessly accessible on desktops, tablets, and mobiles.</p>
        </div>
      </div>
    </div>
  </div>
</div>

);
};

export default Services;
