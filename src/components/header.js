// import Link from 'next/link';
import '../styles/components/Header.css';
import '../styles/Globals.css';

const Header = () => {
    return (
        <nav>
            <div className="header-container">
                <div className="header-logo">
                  <p>Adventure Yurts</p>
                </div>
                <ul className="header-items">
                    <li>Home</li>
                    <li>The Design</li>
                    <li>Gallery</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="title-container">
                    <h1>ADVENTURE YURTS</h1>
                    <p id="slogan">We build CAD designed yurts using commercial machinery.</p>
                    {/* <div>
                        <a href="/">Find out more</a>
                    </div> */}
            </div>
        </nav>
    )
}

export default Header;
