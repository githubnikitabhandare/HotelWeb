import { Link } from "react-router-dom";
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'

export default function Team() {
  return (
    <div>
        <div className="container-fluid bg-light py-6 my-6 mt-0">
            <div className="container text-center animated bounceInDown">
                <h1 className="display-1 mb-4">Our Team</h1>
                <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                    <li className="breadcrumb-item text-dark" aria-current="page">Our Team</li>
                </ol>
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
                                <Link className="share btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fas fa-share-alt"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-instagram"></i></Link>
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
                                <Link className="share btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fas fa-share-alt"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-instagram"></i></Link>
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
                                <Link className="share btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fas fa-share-alt"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-instagram"></i></Link>
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
                                <Link className="share btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fas fa-share-alt"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="share-link btn btn-primary btn-md-square rounded-circle mb-2" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
