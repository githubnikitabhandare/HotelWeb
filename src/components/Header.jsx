import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
        
        
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <Link to="" className="navbar-brand">
                        <h1 className="text-primary fw-bold mb-0">Cater<span className="text-dark">Serv</span> </h1>
                    </Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                            <NavLink to="/event" className="nav-item nav-link">Events</NavLink>
                            <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu bg-light">
                                    <NavLink to="/book" className="dropdown-item">Booking</NavLink>
                                    <NavLink to="/blog" className="dropdown-item">Our Blog</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                
                                </div>
                            </div>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                        <NavLink to="" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</NavLink>
                    </div>
                </nav>
            </div>
        </div>
  )
}
