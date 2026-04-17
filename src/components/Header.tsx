import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <h1>Robert_Barry_portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME_</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects_</Link>
                    </li>
                </ul> 
            </nav>
        </header>
    );
}