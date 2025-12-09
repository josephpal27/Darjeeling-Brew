import './Footer.css';
import footerLogo from '../../assets/images/logo/logo.avif';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoHomeSharp, IoMailOpen } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-box">
            <img src={footerLogo} alt="Logo" loading="lazy" />
            <div className="social-icons">
              <a href="#"><FiFacebook className="icon" /></a>
              <a href="#"><FaInstagram className="icon" /></a>
              <a href="#"><FaXTwitter className="icon" /></a>
              <a href="#"><FiYoutube className="icon" /></a>
            </div>
          </div>
          <div className="footer-box">
            <span>Quick Links</span>
            <Link to="/">Home</Link>
            <HashLink smooth to="/#about-us">Origin of the Brew</HashLink>
            <HashLink smooth to="/#products">Products</HashLink>
            <HashLink smooth to="/#darjeeling-story">Darjeeling Story</HashLink>
            <HashLink smooth to="/#about-us">About Us</HashLink>
            <HashLink smooth to="/#art-of-brewing">Art of Brewing</HashLink>
          </div>
          <div className="footer-box">
            <span>Contact Info</span>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vcare@thedarjeelingbrew.com" target="_blank"> <IoMailOpen className="icon" /> vcare@thedarjeelingbrew.com</a>
            <a href="https://maps.app.goo.gl/m5Gd2rf88xP1sZhu7" target="_blank"> <IoHomeSharp className="icon" /> Kangchenjunga Darjeeling Beverages Pvt. Ltd., Tangra Industrial Estate - II, 45,Radhanath Chowdhury Road, Tangra, Kolkata - 700015</a>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2025 <span>| The Darjeeling Brew</span> | All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
