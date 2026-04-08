
import './style.css';
import appcraft_logo from '../../assets/appcraft_logo.png';
import { SiNextdotjs, SiFastapi, SiMysql, SiPhp, SiJavascript, SiReact, SiPython, SiHtml5, SiCsswizardry } from 'react-icons/si';
import { FaHardHat } from "react-icons/fa";

function AppcraftPage() {
    return (
        <>


            <section className="project-hero" id='appcraft'>
                <div className="hero-content">
                    <h1>AppCraft</h1>
                    <p className="subtitle">AI-Powered Job Application Assistant</p>

                    <p className="description">
                        Helping job seekers build stronger, more personalized applications through
                        AI-assisted CV optimization and guided content creation.
                    </p>

                    <div className="buttons">
                        <a href="https://github.com/abdenourmallem/appcraft">GitHub</a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="placeholder">
                        <img src={appcraft_logo} alt="AppCraft Logo" />
                    </div>
                </div>
            </section>


            <section className="section">
                <h2>Problem & Solution</h2>

                <div className="two-columns">
                    <div>
                        <h3>Problem</h3>
                        <p>
                            Many candidates apply to jobs using generic CVs and templates,
                            resulting in low response rates and missed opportunities.
                        </p>
                    </div>

                    <div>
                        <h3>Solution</h3>
                        <p>
                            AppCraft combines structured CV building with AI-driven analysis
                            to help users tailor their applications and better communicate
                            their real experience.
                        </p>
                    </div>
                </div>
            </section>


            <section className="section">
                <h2>Tech Stack</h2>

                <div className='tags'>
                    <SiNextdotjs size={70} title="Next.js" />
                    <SiFastapi size={70} color="#009688" title="FastAPI" />
                    <SiMysql size={70} color="#4479A1" title="MySQL" />
                </div>
            </section>


            <section className="section">
                <h2>Key Features</h2>

                <div className="features">
                    <div className="feature">
                        <h4>ATS-Friendly CV Builder</h4>
                        <p>Structured templates built with HTML/CSS for compatibility with ATS systems.</p>
                    </div>

                    <div className="feature">
                        <h4>AI-Assisted Writing</h4>
                        <p>Guided cover and motivation letter creation (not fully automated).</p>
                    </div>

                    <div className="feature">
                        <h4>Content Personalization</h4>
                        <p>Detects generic phrases and suggests improvements.</p>
                    </div>

                    <div className="feature">
                        <h4>AI Scoring System</h4>
                        <p>Evaluates clarity, specificity, and impact of applications.</p>
                    </div>

                    <div className="feature">
                        <h4>Job Optimization</h4>
                        <p>Adapts CVs and letters to specific job descriptions.</p>
                    </div>

                    <div className="feature">
                        <h4>Future Integrations</h4>
                        <p>Planned job search integration and application tracking.</p>
                    </div>
                </div>
            </section>


            <section className="section">
                <h2>Highlights</h2>
                <ul className="highlights">
                    <li>Designing a SaaS product from scratch</li>
                    <li>Integrating AI into real-world job application workflows</li>
                    <li>Focusing on user guidance rather than full automation</li>
                    <li>Building scalable architecture with Next.js and FastAPI</li>
                </ul>
            </section>
            <section className="section">
                <h2>Project Status</h2>
                <p>
                    Currently in active development. Core architecture, AI workflows,
                    and database design are being implemented with a focus on building
                    an MVP for real user testing.
                </p>
                <FaHardHat size={70} color="#f39c12" />

            </section>
        </>
    );
}
export default AppcraftPage;