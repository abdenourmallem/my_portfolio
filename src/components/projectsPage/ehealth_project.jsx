import { useState } from 'react';
import Navbar from '../navbar';
import Project from '../../data/Projects.jsx';
import './style.css';
import ehealth from '../../assets/ehealth.png';
import appcraft_logo from '../../assets/appcraft_logo.png';
import { SiNextdotjs, SiFastapi, SiMysql, SiPhp, SiJavascript, SiReact, SiPython, SiHtml5, SiCsswizardry } from 'react-icons/si';

function EhealthPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const imgs = import.meta.glob('../../assets/ehealth_screenshots/*.png', { eager: true });
    const sysimgs = import.meta.glob('../../assets/ehealth_screenshots/system_design/*.png', { eager: true });
    const screenshots = Object.values(imgs).map((img, index) => ({
        id: index,
        src: img.default
    }));
    const systemDesigns = Object.values(sysimgs).map((img, index) => ({
        id: index,
        src: img.default
    }));
    return (
        <>
            <section className="project-hero" id='ehealth'>
                <div className="hero-content">
                    <h1>E-Health</h1>
                    <p className="subtitle">School Medical Record System</p>
                    <p className="description">
                        Digitizing student healthcare by centralizing medical records into a secure web platform.
                    </p>

                    <div className="buttons">
                        <a href="https://github.com/abdenourmallem/E-Health">GitHub</a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={ehealth} alt="Dashboard" />
                </div>
            </section>


            <section className="section">
                <h2>Problem & Solution</h2>

                <div className="two-columns">
                    <div>
                        <h3>Problem</h3>
                        <p>
                            Managing student medical records in Algerian schools relies entirely on paper files. This creates several critical problems: parents have no visibility into their child's health history, sharing information between doctors, nurses, and school staff is slow and error-prone, paper files can be lost or damaged, storage space runs out, and generating statistics requires manual counting. There is no central place where all actors — parents, doctors, directors — can access and update a student's medical record securely. E-Health was built to solve all of this by moving the entire system online.
                        </p>
                    </div>

                    <div>
                        <h3>Solution</h3>
                        <p>
                            E-Health replaces paper files with a centralized web platform hosted on a local server. Each student gets a digital medical folder that tracks all visit types — general, dental, psychological, and vaccination. Doctors can log visits and update records in real time. Parents can log in and consult their child's full health history at any time. School directors get an overview of all students. A statistics dashboard powered by D3.js visualizes illness distribution across Algeria on an interactive map, replacing manual yearly reports with real-time data. The system also includes a visual oral health form with a clickable tooth map, and a vaccination tracking sheet following the official Algerian school health schedule.
                        </p>
                    </div>
                </div>
            </section>


            <section className="section">
                <h2>Tech Stack</h2>

                <div className="tags">
                    <SiPhp size={70} color="#777BB4" />
                    <SiJavascript size={70} color="#F7DF1E" />
                    <SiHtml5 size={70} color="#E34F26" />
                    <SiMysql size={70} color="#4479A1" />
                    <SiCsswizardry size={70} color="#264DE4" />
                </div>
            </section>


            <section className="section">
                <h2>Key Features</h2>

                <div className="features">
                    <div className="feature">
                        <h4>Student Management</h4>
                        <p>searchable student list with individual digital medical folders.</p>
                    </div>

                    <div className="feature">
                        <h4>Multi-type visit tracking</h4>
                        <p>general, dental, psychological and vaccination visits.</p>
                    </div>

                    <div className="feature">
                        <h4>Vaccination Tracking</h4>
                        <p>Monitor vaccination status over time.</p>
                    </div>

                    <div className="feature">
                        <h4>Data Visualization</h4>
                        <p>Interactive charts and Algeria map dashboard.</p>
                    </div>
                    <div className="feature">
                        <h4>Statistics dashboard</h4>
                        <p>interactive choropleth map of Algeria showing illness distribution by wilaya using D3.js.</p>
                    </div>
                    <div className="feature">
                        <h4>Role-based access</h4>
                        <p> doctors, nurses, directors and parents each see only what they need.</p>
                    </div>
                    <div className="feature">
                        <h4>Medical history</h4>
                        <p>full visit history per student with all reports stored and accessible.</p>
                    </div>
                    <div className="feature">
                        <h4>Parent portal</h4>
                        <p>parents can remotely consult their child's complete health record.</p>
                    </div>
                    <div className="feature">
                        <h4>Email notifications</h4>
                        <p>parents automatically receive an email when a doctor logs a visit, adds a vaccination or updates their child's medical record.</p>
                    </div>
                </div>
            </section>


            <section className="section">
                <h2>Project Screens</h2>

                <div className="gallery">
                    {screenshots.map((shot) => (
                        <img key={shot.id} src={shot.src} onClick={() => setSelectedImage(shot.src)} />
                    ))}
                    {selectedImage && (
                        <div className="lightbox" onClick={() => setSelectedImage(null)}>
                            <img src={selectedImage} alt="preview" />
                        </div>
                    )}
                </div>
            </section>


            <section className="section">
                <h2>System Design</h2>

                <div className="gallery">
                    {systemDesigns.map((shot) => (
                        <img key={shot.id} src={shot.src} />
                    ))}
                </div>
            </section>


            <section className="section">
                <h2>Highlights</h2>
                <ul className="highlights">
                    <li>Built full-stack system from scratch using PHP, JavaScript and MySQL</li>
                    <li>Designed relational database schema with 15+ tables</li>
                    <li>Implemented interactive dental health interface with visual tooth map</li>
                    <li>Integrated D3.js choropleth map showing illness distribution by wilaya</li>
                    <li>Built role-based access system for 4 user types</li>
                    <li>Implemented automated email notifications to parents via PHP</li>
                </ul>
            </section>
            <section className='section'>
                <h2>Project Status</h2>
                <p>
                    This project is complete and fully functional, but was intentionally
                    designed as a nucleus for a larger system — with the potential to scale
                    into a government-level national school health platform covering all
                    wilayas of Algeria.
                </p>
            </section>

        </>
    );
}
export default EhealthPage;