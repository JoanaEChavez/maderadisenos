import "./NavBar.css"





const NavBar = () => {
    return (
        <header className="header">
            <div className="container_header">
                <h1 className="header_title">En Madera Diseños </h1>

                <nav className="navbar">
                    <a className="navbar_link" href ="#">Productos</a>
                    <a className="navbar_link" href ="#">Diseños</a>
                    <a className="navbar_link" href ="#">Nosotros</a>
                    
                </nav>
            </div>

        </header>
    );
};

export default NavBar;
