import './Main.css';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";



const Main = () => {
    return (
        <main className="hero-section">
            <h2 className='name'>Norbert Zastępa</h2>
            <h4>Frontend Developer</h4>
            <h5>norbertzastepa.website</h5>

            <div className="hero-section-buttons">
                <p className="email"><FaEnvelope /> Email</p>
                <p className="linkedin"><FaLinkedin /> LinkedIn</p>
            </div>
            <div>
                <h2 className='title'>About</h2>
                <p className='section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='interests'>
                <h2 className='title'>Interests</h2>
                <p className='section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        </main>
    )
}

export default Main