import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='footer-section'>
            <FaFacebook size={25} />
            <FaTwitter size={25} />
            <FaInstagram size={25} />
            <FaGithub size={25} />
        </footer>
    )
}

export default Footer