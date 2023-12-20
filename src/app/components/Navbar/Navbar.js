import Link from "next/link";
import './Navbar.css';

const Navbar=()=>{

    return(
        <header>
            <nav>
                <h1>Schools.io</h1>

                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/schools'>Schools</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Navbar;