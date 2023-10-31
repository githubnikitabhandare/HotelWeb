import { Link } from "react-router-dom"
import hero from '../assets/img/hero.png'
import about from '../assets/img/about.jpg'
import event1 from '../assets/img/event-1.jpg'
import event2 from '../assets/img/event-2.jpg'
import event3 from '../assets/img/event-3.jpg'
import event4 from '../assets/img/event-4.jpg'
import event5 from '../assets/img/event-5.jpg'
import event6 from '../assets/img/event-6.jpg'
import event7 from '../assets/img/event-7.jpg'
import event8 from '../assets/img/event-8.jpg'
import menu1 from '../assets/img/menu-01.jpg'
import menu2 from '../assets/img/menu-02.jpg'
import menu3 from '../assets/img/menu-03.jpg'
import menu4 from '../assets/img/menu-04.jpg'
import menu5 from '../assets/img/menu-05.jpg'
import menu6 from '../assets/img/menu-06.jpg'
import menu7 from '../assets/img/menu-07.jpg'
import menu8 from '../assets/img/menu-08.jpg'
import menu9 from '../assets/img/menu-09.jpg'
import backgroundsite from '../assets/img/background-site.jpg'
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'
// import testimonial1 from '../assets/img/testimonial-1.jpg'
// import testimonial2 from '../assets/img/testimonial-2.jpg'
// import testimonial3 from '../assets/img/testimonial-3.jpg'
// import testimonial4 from '../assets/img/testimonial-4.jpg'
import blog1 from '../assets/img/blog-1.jpg'
import blog2 from '../assets/img/blog-2.jpg'
import blog3 from '../assets/img/blog-3.jpg'





export default function Home() {
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
            <div className="container-fluid event py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Latest Events</small>
                        <h1 className="display-5 mb-5">Our Social & Professional Events Gallery</h1>
                    </div>
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                            <li className="nav-item p-2">
                                <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                    <span className="text-dark" style={{width: '150px'}}>All Events</span>
                                </a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                    <span className="text-dark" style={{width: '150px'}}>Wedding</span>
                                </a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                    <span className="text-dark" style={{width: '150px'}}>Corporate</span>
                                </a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                    <span className="text-dark" style={{width: '150px'}}>Cocktail</span>
                                </a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                    <span className="text-dark" style={{width: '150px'}}>Buffet</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event1} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="" data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event2} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Corporate</h4>
                                                        <Link to="" data-lightbox="event-2" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event3} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="" data-lightbox="event-3" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event4} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Buffet</h4>
                                                        <Link to="" data-lightbox="event-4" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event5} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Cocktail</h4>
                                                        <Link to="" data-lightbox="event-5" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event6} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="" data-lightbox="event-6" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event7} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Buffet</h4>
                                                        <Link to="" data-lightbox="event-7" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event8} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Corporate</h4>
                                                        <Link to="" data-lightbox="event-17" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event1} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="" data-lightbox="event-8" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event2} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Wedding</h4>
                                                        <Link to="" data-lightbox="event-9" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event3} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Corporate</h4>
                                                        <Link to="" data-lightbox="event-10" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event4} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Corporate</h4>
                                                        <Link to="" data-lightbox="event-11" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-4" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event5} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Cocktail</h4>
                                                        <Link to="" data-lightbox="event-12" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event6} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Cocktail</h4>
                                                        <Link to="" data-lightbox="event-13" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-5" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event7} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Buffet</h4>
                                                        <Link to="" data-lightbox="event-14" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="event-img position-relative">
                                                    <img className="img-fluid rounded w-100" src={event8} alt=""></img>
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Buffet</h4>
                                                        <Link to="" data-lightbox="event-15" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid menu bg-light py-6 my-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Menu</small>
                        <h1 className="display-5 mb-5">Most Popular Food in the World</h1>
                    </div>
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active" data-bs-toggle="pill" href="#tab-6">
                                    <span className="text-dark" style={{width: '150px'}}>Starter</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-7">
                                    <span className="text-dark" style={{width: '150px'}}>Main Course</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-8">
                                    <span className="text-dark" style={{width: '150px'}}>Drinks</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-9">
                                    <span className="text-dark" style={{width: '150px'}}>Offers</span>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-10">
                                    <span className="text-dark" style={{width: '150px'}}>Our Spesial</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-6" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu1} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Paneer</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.2s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu2} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet Potato</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.3s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu3} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sabudana Tikki</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.4s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu4} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Pizza</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.5s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu5} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Bacon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.6s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu6} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Chicken</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.7s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu7} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Blooming</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.8s">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu8} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-7" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu1} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Argentinian</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu3} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Crispy</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu5} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sabudana Tikki</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu7} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Blooming</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu8} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Argentinian</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu3} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Lemon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu2} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Water Drink</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu1} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Salty lemon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-8" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu1} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Crispy water</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu2} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Juice</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu3} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Orange</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu4} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Apple Juice</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu5} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Banana</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu6} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet Water</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu7} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Hot Coffee</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu8} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet Potato</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-9" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu6} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sabudana Tikki</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu7} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Crispy</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu9} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Pizza</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu2} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Bacon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu3} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Chicken</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu5} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Blooming</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu7} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu9} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Argentinian</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-10" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu6} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sabudana Tikki</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu7} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Crispy</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu9} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Pizza</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu2} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Bacon</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu3} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Chicken</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu5} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Blooming</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu7} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Sweet</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="menu-item d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded-circle" src={menu9} alt=""></img>
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>Argentinian</h4>
                                                    <h4 className="text-primary">$90</h4>
                                                </div>
                                                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-1">
                            <img src={backgroundsite} className="img-fluid h-100 w-100 rounded-start" style={{objectFit: 'cover', opacity: '0.7'}} alt=""></img>
                        </div>
                        <div className="col-10">
                            <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                                <div className="text-center">
                                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Book Us</small>
                                    <h1 className="display-5 mb-5">Where you want Our Services</h1>
                                </div>
                                <div className="row g-4 form">
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option selected>Select Country</option>
                                            <option value="1">USA</option>
                                            <option value="2">UK</option>
                                            <option value="3">India</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option selected>Select City</option>
                                            <option value="1">Depend On Country</option>
                                            <option value="2">UK</option>
                                            <option value="3">India</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option selected>Select Palace</option>
                                            <option value="1">Depend On Country</option>
                                            <option value="2">UK</option>
                                            <option value="3">India</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option selected>Small Event</option>
                                            <option value="1">Event Type</option>
                                            <option value="2">Big Event</option>
                                            <option value="3">Small Event</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option selected>No. Of Palace</option>
                                            <option value="1">100-200</option>
                                            <option value="2">300-400</option>
                                            <option value="3">500-600</option>
                                            <option value="4">700-800</option>
                                            <option value="5">900-1000</option>
                                            <option value="6">1000+</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option selected>Vegetarian</option>
                                            <option value="1">Vegetarian</option>
                                            <option value="2">Non Vegetarian</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <input type="mobile" className="form-control border-primary p-2" placeholder="Your Contact No."/>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <input type="date" className="form-control border-primary p-2" placeholder="Select Date"/>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <input type="email" className="form-control border-primary p-2" placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">Submit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <img src={backgroundsite} className="img-fluid h-100 w-100 rounded-end" style={{objectFit: 'cover' ,opacity: '0.7'}} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid team py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Team</small>
                        <h1 className="display-5 mb-5">We have experienced chef Team</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src={team1} alt=""></img>
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Henry</h4>
                                    <p className="text-white mb-0">Decoration Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src={team2} alt=""></img>
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Jemes Born</h4>
                                    <p className="text-white mb-0">Executive Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src={team3} alt=""></img>
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Martin Hill</h4>
                                    <p className="text-white mb-0">Kitchen Porter</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src={team4} alt=""></img>
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Adam Smith</h4>
                                    <p className="text-white mb-0">Head Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Testimonial</small>
                        <h1 className="display-5 mb-5">What Our Customers says!</h1>
                    </div>
                    <div className="owl-carousel owl-theme testimonial-carousel testimonial-carousel-1 mb-4 wow bounceInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src={testimonial1} className="img-fluid rounded-circle flex-shrink-0" alt=""></img>
                                <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src={testimonial2} className="img-fluid rounded-circle flex-shrink-0" alt=""></img>
                                <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src={testimonial3} className="img-fluid rounded-circle flex-shrink-0" alt=""></img>
                                <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src={testimonial4} className="img-fluid rounded-circle flex-shrink-0" alt=""></img>
                                <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel testimonial-carousel testimonial-carousel-2 wow bounceInUp" data-wow-delay="0.3s">
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src={testimonial1} className="img-fluid rounded-circle flex-shrink-0" alt=""></img>
                                <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src={testimonial2} className="img-fluid rounded-circle flex-shrink-0" alt=""></img>                                
                                <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src={testimonial3} className="img-fluid rounded-circle flex-shrink-0" alt=""></img>
                                <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src={testimonial4} className="img-fluid rounded-circle flex-shrink-0" alt=""></img>
                                <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container-fluid blog py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Blog</small>
                        <h1 className="display-5 mb-5">Be First Who Read News</h1>
                    </div>
                    <div className="row gx-4 justify-content-center">
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src={blog1} className="img-fluid w-100" alt=""></img>
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <Link to="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src={blog2} className="img-fluid w-100" alt=""></img>
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <Link to="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src={blog3} className="img-fluid w-100" alt=""></img>
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <Link to="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</Link>
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
