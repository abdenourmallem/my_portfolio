const cvData = {
    name: "Abdennour Mallem",
    location: "Ouargla, Algeria",
    phone: "+213 673 725 831",
    email: "mallemabdenour@gmail.com",

    experience: [
        {
            id: 1,
            title: "Internship — SAP Developer",
            company: "ENAFOR",
            date: "Dec 2022 — Jan 2023",
            bullets: ["SAP development and SAP servers administration"]
        },
        {
            id: 2,
            title: "Part-time Teacher",
            company: "Higher Institute of Management, Ouargla",
            date: "Nov 2025 — Ongoing",
            bullets: [
                "Taught Algorithms and Data Structures to Higher Technical Diploma students",
                "Taught Database Implementation & Administration using SQL Server"
            ]
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
            date: "Oct 2025 — Ongoing",
            description: "Network fundamentals, routing & switching, security essentials"
        },
        {
            id: 4,
            title: "Ethical Hacking & Penetration Testing",
            school: "Silicon Oasis Academy (Cisco Networking Academy)",
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
            items: ["Java", "Python", "JavaScript", "C", "C++"]
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
            description: "SaaS platform that leverages AI to generate professional CVs and tailored motivation letters based on user input. The system transforms structured user data into high-quality, human-like documents optimized for job applications.",
            tools: ["React", "Next.js", "JavaScript", "MySQL", "FastAPI"]
        }
    ]
};

export default cvData;