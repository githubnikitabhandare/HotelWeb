import { Link } from "react-router-dom";
import about from '../assets/img/about.jpg'

export default function About() {
  return (
    <>
        <div>
            <div className="container-fluid bg-light py-6 my-6 mt-0">
                    <div className="container text-center animated bounceInDown">
                        <h1 className="display-1 mb-4">About Us</h1>
                        <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                            <li className="breadcrumb-item"><Link to="">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-dark" aria-current="page">About</li>
                        </ol>
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
        </div>
    </>
  )
}
