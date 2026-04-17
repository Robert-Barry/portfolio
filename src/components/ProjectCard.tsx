interface ChildNodes {
    index: number;
    name: string;
    description: string;
    tools: string[];
}

export default function ProjectCard({ index, name, description, tools}: ChildNodes) {
    return (
        <div className="project-card">
            <p className="node">NODE_{index}</p>
            <h3 className="project-name">{name}</h3>
            <p className="project-description">{description}</p>
            <ul className="project-tools">
                {tools.map((tool, index) => (
                    <li className="project-tool" key={index}>{tool}</li>
                ))}
            </ul>
        </div>
    );
}