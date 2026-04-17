import ProjectCard from "./ProjectCard";
import projects from "../assets/projects.json";


export default function Home() {
    return (
        <main>
            <section className="hero">
                <span>SYSTEM_STATUS: ACTIVE</span>
                <h2>REACT_NATIVE</h2>
                <h2>REACT</h2>
                <p>&gt; INITIALIZING PORTFOLIO...</p>
                <p>&gt; LOADING COMPONENTS...</p>
                <p>&gt; System ready. Welcome to the portfolio of Robert Barry</p>
            </section>
            <section className="projects">
                <h2>PROJECT_NODES</h2>
                {projects.projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </section>
        </main>
    );
}