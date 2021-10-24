import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-brand">
                <span className="nav-brand-heading">Kunal Tijare</span>
            </div>
            <div className="nav-group">
                <div className="nav-menu">About</div>
                <div className="nav-menu">Projects</div>
                <div className="nav-menu">Contact</div>
                <div className="nav-menu">Blogs</div>
            </div>
        </div>

    )

}