import { Link } from "react-router-dom";
import { useAuthState } from '../../context';
import { faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";

function Footer() {
    const userInfo = useAuthState();
    return (
        <Style>
            <footer className="py-4 px-3">
                <div className="container">
                    <div className="d-flex justify-content-around flex-wrap text-center">
                        <div className="footerLogo col-xs-6 mt-4">
                            <img src="/footer-logo.svg" alt="footer logo" />
                            <h6 className="text-light py-3">Hi {userInfo.name || userInfo.username} !</h6>
                        </div>
                        <div className="col-6 col-sm-3 mt-4">
                            <h5 className="text-uppercase"><b>THE BASICS</b></h5>
                            <ul className="text-capitalize">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Movies</Link></li>
                                <li className="text-uppercase"><Link to="/">TV Show</Link></li>
                                <li><Link to="/">Series</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3 mt-4">
                            <h5 className="text-uppercase"><b>THE BASICS</b></h5>
                            <ul className="text-capitalize">
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Categories</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3 mt-4">
                            <h5 className="text-uppercase"><b>LEGAL</b></h5>
                            <ul className="text-capitalize">
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="mt-4 border-bottom"></div>
                        <ul className="d-flex justify-content-center col-12 flex-wrap pt-4">
                            <li className="col-1"><a href="https://instagram.com/ztmsssaz" rel="noreferrer follow" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li className="col-1"><a href="https://twitter.com/ztmsssaz" rel="noreferrer follow" target="_blank"><FontAwesomeIcon rel="noreferrer follow" icon={faTwitter} /></a></li>
                            <li className="col-1"><a href="https://linkedin.com/ztmsssaz" rel="noreferrer follow" target="_blank"><FontAwesomeIcon rel="noreferrer follow" icon={faLinkedin} /></a></li>
                            <li className="col-1"><a href="https://github.com/ztmsssaz" rel="noreferrer follow" target="_blank"><FontAwesomeIcon rel="noreferrer follow" icon={faGithub} /></a></li>
                        </ul>
                    </div>
                    <div className="text-center my-3">
                        <a className="w-25 mx-auto" href="https://iamabolfazl.ir" rel="noreferrer follow" target="_blank"><small>By @ztmsssaz</small></a>
                    </div>
                </div>
            </footer>
        </Style >
    )
}
export default Footer;