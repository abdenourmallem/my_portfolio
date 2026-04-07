import Navbar from '../navbar';
import './style.css';

const cvData = {
    name: "Abdennour Mallem",
    location: "Ouargla, Algeria",
    phone: "+213 673 725 831",
    email: "mallemabdenour@gmail.com",

    experience: [
        {
            id: 1,
            title: "Part-time Teacher",
            company: "Higher Institute of Management, Ouargla",
            date: "Nov 2025 — Ongoing",
            bullets: [
                "Taught Algorithms and Data Structures to Higher Technical Diploma students",
                "Taught Database Implementation & Administration using SQL Server"
            ]
        },
        {
            id: 2,
            title: "Internship — SAP Developer",
            company: "ENAFOR",
            date: "Dec 2022 — Jan 2023",
            bullets: ["SAP development and SAP servers administration"]
        },
        {
            id: 3,
            title: "Internship — IT Administration",
            company: "SETRAM",
            date: "Dec 2023 — Jan 2024",
            bullets: ["IT infrastructure administration and support"]
        }
    ],

    education: [
        {
            id: 1,
            title: "Master's Degree — Theoretical Computer Science",
            school: "Kasdi Merbah University, Ouargla",
            date: "2023 — 2025"
        },
        {
            id: 2,
            title: "Bachelor's Degree — Information Systems",
            school: "Kasdi Merbah University, Ouargla",
            date: "2020 — 2023"
        },
        {
            id: 3,
            title: "CCNA — Cisco Certified Network Associate",
            school: "Silicon Oasis Academy (Cisco Networking Academy)",
            date: "Oct 2023 — Jul 2025",
            description: "Network fundamentals, routing & switching, security essentials"
        },
        {
            id: 4,
            title: "Ethical Hacking & Penetration Testing",
            school: "Silicon Oasis Academy",
            date: "Nov 2025 — Ongoing"
        }
    ],

    skills: [
        {
            id: 1,
            category: "Web Development",
            items: ["React.js", "Next.js", "FastAPI", "PHP", "JavaScript"]
        },
        {
            id: 2,
            category: "Programming",
            items: ["Java", "Python", "JavaScript"]
        },
        {
            id: 3,
            category: "Databases",
            items: ["SQL Server", "MySQL"]
        }
    ],

    projects: [
        {
            id: 1,
            title: "E-Health Web Application",
            description: "Medical record digitalization web app allowing parents to monitor their children's health at school. Secure database management with MySQL.",
            tools: ["PHP", "JavaScript", "HTML/CSS", "MySQL"]
        },
        {
            id: 2,
            title: "AppCraft — AI-Powered CV & Letter Generator",
            description: "SaaS platform leveraging AI to generate professional CVs and tailored motivation letters from structured user input.",
            tools: ["React", "Next.js", "JavaScript", "MySQL"]
        }
    ]
};

function ResumePage() {
    return (<>
        <Navbar />
        <div className='resume-container'>
            <div className='personal-info'>
                <h1>{cvData.name}</h1>
                <h3>{cvData.location}</h3>
                <h3>{cvData.phone} | {cvData.email}</h3>
            </div>
            <div className='resume-section'>
                <h3 className='section-title'>Profissional Experience</h3>
                <hr />
                {cvData.experience.map((exp) => (<div key={exp.id} classname='section-item'>
                    <h3>{exp.company} </h3>
                    <div className='details'>
                        <p className='title'>{exp.title} <p className='date-section'>{exp.date}</p></p>
                        {exp.bullets.map((bullet, index) => (<ul key={index} className='bullets-list'>
                            <li>{bullet}</li>
                        </ul>))}
                    </div>

                </div>))}
            </div>
            <div className='resume-section'>
                <h3 className='section-title'>Education</h3>
                <hr />
                {cvData.education.map((edu) => (<div key={edu.id} classname='section-item'>
                    <h3>{edu.school} </h3>
                    <div className='details'>
                        <p className='title'>{edu.title}
                            <p className='date-section'>{edu.date}</p></p>
                    </div>

                </div>))}
            </div>
            <div className='resume-section'>
                <h3 className='section-title'>Skills</h3>
                <hr />
                <div className='details'>
                    {cvData.skills.map((skill) => (<div key={skill.id} className='section-item'>
                        <ul className='bullets-list'>
                            <li>

                                <h4>{skill.category}: </h4>
                                {<p>{skill.items.join(', ')}</p>}
                            </li>
                        </ul>

                    </div>))}
                </div>

            </div>
            <div className='resume-section'>
                <h3 className='section-title'>Projects</h3>
                <hr />
                {cvData.projects.map((project) => (<div key={project.id} classname='section-item'>
                    <h3>{project.title}</h3>
                    <div className='details'>
                        <p>{project.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {project.tools.map((tool, index) => (<span key={index} className='tool-badge'>{tool}</span>))}
                        </div>
                    </div>


                </div>))}
            </div>

        </div>


    </>)
}

export default ResumePage;