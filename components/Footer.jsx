import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter } from 'react-icons/fa6';

export default function Footer() {
 
  return (
    <div className="footer">
      <div className="container">
        <div className="marketing">
          <h5 className="title">Zoek Marketing</h5>
          <p className="description">We understand the headache SMB marketing can cause - which is why we&apos;d love to get started and help you along your journey! Get in touch, and our team of experts will be there to answer all your questions.</p>
          <div className="social">
            <a href="https://www.facebook.com/GoZoek/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/gozoek_" target="_blank">
              <FaTwitter/>
            </a>
            <a href="https://www.instagram.com/gozoek/" target="_blank">
              <FaInstagram/>
            </a>
          </div>
        </div>
        <div className="connected">
          <h5 className="title">Get Connected</h5>
          <div className="links">
            <a href="http://www.gozoek.com/" target="_blank">www.gozoek.com</a>
            <a href="mailto:hi@gozoek.com" target="_blank">hi@gozoek.com</a>
            <a href="tel:8887379635" target="_blank">1-888-737-9635</a>
          </div>
        </div>
        <div className="office">
          <h5 className="title">Our Office</h5>
          <p className="address">530 Technology Dr. <br/>Irvine CA 92618</p>
        </div>
        <p className="copyright">© 2023 All rights reserved. Zoek Marketing</p>
      </div>
    </div>
  );
}