import database from "../assets/database.png";
import coding from "../assets/coding.png";
import analytics from "../assets/analytics.png";

function SkillsSection() {
    return (
        <>
            <h1>Skills overview</h1>
            <p>Here are some of the key skills and technologies I have experience with:</p>
            <div className="flex-container skills-container">
                <div className="card">
                    <div className="container">
                        <img src={coding} alt="" />
                        <h4><b>Frontend</b></h4>
                        <p>React/NextJs</p>
                        <p>JavaScript</p>
                        <p>HTML/CSS</p>
                    </div>
                </div>

                <div className="card">
                    <div className="container">
                        <img src={database} alt="" />
                        <h4><b>backend</b></h4>
                        <p>PHP</p>
                        <p>NodeJs</p>
                        <p>Pyrhon/Django</p>
                        <p>MySQL/SQL Server</p>
                    </div>
                </div>

                <div className="card">
                    <div className="container">
                        <img src={analytics} alt="" />
                        <h4><b>DataAnalysis</b></h4>
                        <p>Pandas/Numpy</p>
                        <p>ML Basics</p>
                    </div>
                </div>
            </div>

        </>
    );
}
export default SkillsSection;

