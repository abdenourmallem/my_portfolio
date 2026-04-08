import Navbar from '../navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import EhealthPage from './ehealth_project.jsx';
import AppcraftPage from './appcraft_project.jsx';
import Footer from '../footer.jsx';
function ProjectsPage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <>
            <Navbar />
            <section id="ehealth">
                <EhealthPage />
            </section>

            <div className="divider"></div>

            <section id="appcraft">
                <AppcraftPage />
            </section>
            <Footer />
        </>
    );
}
export default ProjectsPage;