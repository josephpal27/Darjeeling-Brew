import './Footer.css';
import footerLogo from '../../assets/images/logo/logo.avif';
import { Link } from 'react-router-dom';
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
                <Link to="/origin-of-the-brew">Origin of the Brew</Link>
                <Link to="/products">Products</Link>
                <Link to="/darjeeling-story">Darjeeling Story</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/art-of-brewing">Art of Brewing</Link>
            </div>
            <div className="footer-box">
                <span>Contact Info</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wecare@thedarjeelingbrew.com" target="_blank"> <IoMailOpen className="icon"/> wecare@thedarjeelingbrew.com</a>
                <a href="https://maps.app.goo.gl/m5Gd2rf88xP1sZhu7" target="_blank"> <IoHomeSharp className="icon" /> Kangchenjunga Darjeeling Beverages Pvt. Ltd., Tangra Industrial Estate - II, 45,Radhanath Chowdhury Road, Tangra, Kolkata - 700015</a>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © 2025 | The Darjeeling Brew | All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
