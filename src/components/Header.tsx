import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <h1>Robert_Barry_portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul> 
            </nav>
        </header>
    );
}