import "./Footer.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="autho-name">
        <p>Made with  ❤️ <span className="creator"> Md Farhan</span></p>
      </div>
      <div className="social-media">
        <Link to="https://www.linkedin.com/in/mdfarhan0203/"><p className="linkedin"><FaLinkedinIn  size="1.5rem"/></p></Link>
        <Link to="https://www.github.com/mdfarhan0203"><p className="github"><FaGithub size="1.5rem" /></p></Link>
      </div>
    </div>
  );
};
export default Footer;
