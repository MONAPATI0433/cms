// import React from 'react';

// const Footer = () => (
//   <footer className="footer container">
//     <div className="footer__item footer__copyright">
//       © {new Date().getFullYear()}, Built with
//       {` `}
//       <a href="https://www.gatsbyjs.org">Gatsby</a>
//     </div>
//   </footer>
// );

// export default Footer;
import React, { Component } from "react"
import "./footer.css"
import '../components/layout.css'
import '../pages/main.css'
import { Row, Col} from "react-bootstrap"
import { MdMail } from "react-icons/md"
import { 
    FaLocationArrow,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram
 } from "react-icons/fa"
import { Link } from "gatsby"
// import image from '../images/aiqrate-logo-final-blackbg.png'
export default class Footer extends Component {
  render() {
    return (
      <div className="Container-fluid footer text-light ">
        <Row className="p-0 mx-0 text-center aqrations-footer">
          
          <Link className="col text-light" style={{background:'#419d78'}} to="/blog/">
          AIQRATIONS
          </Link >
          <Link className="col text-light" style={{background:'#2d3047'}} to="/blog/">
          ARTICLES
          </Link>
         

        </Row>
        <Row className="m-0 p-0">
          <Col>
            <address>
              <div className="col-md-8 align-self-center quick-link-header">
                <div className="col-md-12 foundation text-light">
                <div>
                  <Link to="/" >
                  {/* <img style={{ margin: 0, height:'40px' }} src={image} alt="logo" className="logo" /> */}
                  </Link>
                </div>
                  <div className="col-md-12">
                    <ul>
                      <small>
                        <li>
                          
                          <Link to="" className="aiqration-nav-link">
                            <MdMail /> consult@aiqrate.ai
                          </Link>
                        </li>
                        <li>
                          
                          <FaLocationArrow /> Bangalore | Delhi | Hyderabad
                        </li>
                        <li className="text-center">
                          Privacy Policy | Terms of Use
                        </li>
                      </small>
                    </ul>
                  </div>
                </div>
              </div>
            </address>
          </Col>
          <Col>
                <h5 className="align-self-center quick-link-header">QUICK LINKS</h5>
                <ul className="footer-quick_links">
                  <small>
                    <li className="quick-links">
                        <Link className="aiqration-nav-link" to="">AIQRATE Engagement Model  </Link>
                        <Link className="aiqration-nav-link" to="">AIQRATIONS  </Link>
                        <Link className="aiqration-nav-link" to="">AIQRATE Team   </Link>
                        <Link className="aiqration-nav-link" to="">Contact Us </Link>
                    </li>
                    </small>
                </ul>
                <ul className="align-self-center d-flex  mt-0">
                    <li className="d-flex text-dark footer-Icons">
                        <Link to=""> <FaFacebook /> </Link>
                        <Link to=""> <FaTwitter /> </Link>
                        <Link to=""> <FaLinkedin /> </Link>
                        <Link to=""> <FaInstagram /> </Link>
                    </li>
                </ul>
          </Col>
        </Row>
        <Row  className="m-0 p-0" style={{background:'#419d78'}}>
        <p className="align-self-center my-0"> <small>  © {new Date().getFullYear()}, <span>AIQRATE ADVISORY & CONSULTING PRIVATE LIMITED</span></small></p>

        </Row>
      </div>
    )
  }
}