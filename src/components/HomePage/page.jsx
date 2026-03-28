import { useState } from 'react'
import '../../App.css'
import Navbar from '../navbar';
import GreetingSection from '../greetingSection';
import SkillsSection from '../skillsSection'
import ProjectSection from '../projectSection'
import Footer from '../footer';
function HomePage() {
    return (
        <>
            <Navbar />
            <GreetingSection />
            <SkillsSection />
            <ProjectSection />
            <Footer />
        </>
    )
}

export default HomePage;
