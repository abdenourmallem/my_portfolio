import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
function Footer() {
    return (
        <footer className="footer" id="contact">
            <h3>Get In Touch</h3>
            <p>I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
            <div className="footer-links">
                <a href="mailto:mallemabdenour@gmail.com"><FaEnvelope size={24} /> mallemabdenour@gmail.com</a>
                <a href="https://www.linkedin.com/in/abdennour-mallem-116b97256" target="_blank"><FaLinkedin size={24} /> LinkedIn</a>
                <a href="https://github.com/abdenourmallem" target="_blank"><FaGithub size={24} /> GitHub</a>


            </div>
            <p className="footer-bottom">© 2026 Abdennour. All rights reserved.</p>
        </footer>
    );
}
export default Footer;