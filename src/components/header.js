// import Link from 'next/link';

const Header = () => {
    return (
        <nav>
            <div>
                <div className="header-logo">
                </div>
                <ul className="header-items">
                    <li>Home</li>
                    <li>The Design</li>
                    <li>Gallery</li>
                    <li>Pricing</li>
                    <li>Contact!</li>
                </ul>
            </div>
            <div>
                <div class="container">
                    <h1>ADVENTURE YURTS</h1>
                    <p>We build CAD designed yurts using commercial machinery.</p>
                    <div>
                        <a href="/">Product</a>
                        <a href="/">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
