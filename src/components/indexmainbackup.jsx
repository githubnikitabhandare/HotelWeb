import { Link } from "react-router-dom"
import hero from '../assets/img/hero.png'
import about from '../assets/img/about.jpg'





export default function Index() {
  return (
    <>
        <div className="container-fluid bg-light py-6 my-6 mt-0">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to CaterServ</small>
                        <h1 className="display-1 mb-4 animated bounceInDown">Book <span className="text-primary">Cater</span>Serv For Your Dream Event</h1>
                        <Link to="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</Link>
                        <Link to="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</Link>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <img src={hero} className="img-fluid rounded animated zoomIn" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid py-6">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                        <img src={about} className="img-fluid rounded" alt=""></img>
                    </div>
                    <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">About Us</small>
                        <h1 className="display-5 mb-4">Trusted By 200 + satisfied clients</h1>
                        <p className="mb-4">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
                        <div className="row g-4 text-dark mb-5">
                            <div className="col-sm-6">
                                <i className="fas fa-share text-primary me-2"></i>Fresh and Fast food Delivery
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-share text-primary me-2"></i>24/7 Customer Support
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-share text-primary me-2"></i>Easy Customization Options
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-share text-primary me-2"></i>Delicious Deals for Delicious Meals
                            </div>
                        </div>
                        <Link to="" className="btn btn-primary py-3 px-5 rounded-pill">About Us<i className="fas fa-arrow-right ps-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid faqt py-6">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                       <div className="row g-4">
                            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
                                <div className="faqt-item bg-primary rounded p-4 text-center">
                                    <i className="fas fa-users fa-4x mb-4 text-white"></i>
                                    <h1 className="display-4 fw-bold" data-toggle="counter-up">689</h1>
                                    <p className="text-dark text-uppercase fw-bold mb-0">Happy Customers</p>
                                </div>
                            </div>
                            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
                                <div className="faqt-item bg-primary rounded p-4 text-center">
                                    <i className="fas fa-users-cog fa-4x mb-4 text-white"></i>
                                    <h1 className="display-4 fw-bold" data-toggle="counter-up">107</h1>
                                    <p className="text-dark text-uppercase fw-bold mb-0">Expert Chefs</p>
                                </div>
                            </div>
                            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
                                <div className="faqt-item bg-primary rounded p-4 text-center">
                                    <i className="fas fa-check fa-4x mb-4 text-white"></i>
                                    <h1 className="display-4 fw-bold" data-toggle="counter-up">253</h1>
                                    <p className="text-dark text-uppercase fw-bold mb-0">Events Complete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                        <div className="video">
                            <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowfullscreen 
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid service py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Services</small>
                        <h1 className="display-5 mb-5">What We Offer</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-cheese fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Wedding Services</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-pizza-slice fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Corporate Catering</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-hotdog fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Cocktail Reception</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-hamburger fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Bento Catering</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-wine-glass-alt fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Pub Party</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-walking fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Home Delivery</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-wheelchair fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Sit-down Catering</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                            <div className="bg-light rounded service-item">
                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                    <div className="service-content-icon text-center">
                                        <i className="fas fa-utensils fa-7x text-primary mb-4"></i>
                                        <h4 className="mb-3">Buffet Catering</h4>
                                        <p className="mb-4">Contrary to popular belief, ipsum is not simply random.</p>
                                        <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}
