import Me from '../assets/me.jpg';
import { useNavigate } from 'react-router-dom';
const Greeting = "Hello, My name is";
const FullName = "Abdennour Mallem";
const Description = "Software engineer specializing in Full-Stack Development & Data Analysis building scalable web apps and data-driven solutions.";

function GreetingSection() {
    const navigate = useNavigate();
    return (
        <div className="greeting-section flex-container">
            <div>
                <img src={Me} alt="Profile" className="profile-image" />
            </div>
            <div>
                <p>{Greeting} </p>
                <h1>{FullName}</h1>
                <p>{Description} Want to know how i may help your project? checkout my   <a onClick={() => navigate('/resumePage')}>resume</a> or get in touch <a href="#contact">here</a>.</p>
            </div>

        </div>
    );
}

export default GreetingSection;