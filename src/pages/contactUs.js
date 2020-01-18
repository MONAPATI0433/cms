  import React, { Component } from 'react'
  import Layout from "../components/layout"
  import { Col, Container, Row, Media } from 'react-bootstrap'
  import './contact.css'
  // import image4 from '../images/bg-aiqrations-p.jpg'
  import {
    FaChessQueen
  } from "react-icons/fa"
  class contactUs extends Component {
    render() {
      return (
        <Layout location={this.props.location}>
          <div style={{
            backgroundColor: "#000000", width: "100%", height: "50px",
            lineHeight: '1.3rem'
          }}>
            <h5 className="text-center" style={{ color: "#c3baba", fontWeight: "robot", position: "relative", top: "15px", fontSize: '16px' }}>
              <span className="text-white" style={{ fontWeight: "bold" }}>
                THANKS&nbsp;&nbsp;
                            </span>
              FOR YOUR INTEREST. HOW CAN WE HELP?
                            </h5>
          </div>

          <div className="mb-5" style={{ backgroundColor: "#f4f4f4", height: "200px" }}>
            <Row>
              <Col md={3}>
                <Media className="media" style={{marginTop:"50px"}}>
                  <FaChessQueen />
                  <Media.Body>
                    <p className="mt-2 " >BECOME THE<br></br>
                      CLIENT</p>
                    <hr style={{ height: "2px", backgroundColor: "#0076da", position: "relative", left: "-55px" }}></hr>
                  </Media.Body>
                </Media>
              </Col>
              <Col md={3} >
                <Media className="media" style={{marginTop:"50px"}}>
                  <FaChessQueen />
                  <Media.Body>
                    <p className="mt-2 normal-para">SET UP DEEP DIVE ADVISORY SESSION</p>
                    <hr style={{ height: "2px", backgroundColor: "#0076da", position: "relative", left: "-55px" }}></hr>
                  </Media.Body>
                </Media>
              </Col>
              <Col md={3} >
                <Media className="media" style={{marginTop:"50px"}}>
                  <FaChessQueen />
                  <Media.Body>
                    <p className="mt-2 normal-para">PARTNER WITH<br></br>
                      US</p>
                    <hr style={{ height: "2px", backgroundColor: "#0076da", position: "relative", left: "-55px" }}></hr>
                  </Media.Body>
                </Media>
              </Col>
              <Col md={3}>
                <Media className="media" style={{marginTop:"50px"}}>
                  <FaChessQueen />
                  <Media.Body>
                    <p className="mt-2 normal-para">PRESS<br></br>
                      ENQUIRIES</p>
                    <hr style={{ height: "2px", backgroundColor: "#0076da", position: "relative", left: "-55px" }}></hr>
                  </Media.Body>
                </Media>
              </Col>
            </Row>
          </div>
          <Container className="mb-3 text-center" style={{marginTop:"100px"}}>
            <Row>
              <div className="text-center">
                <h4 className="align-self-center"><strong>BECOME </strong>THE CLIENT</h4>
                <p className="normal-para" style={{ fontSize: "14px" }}>Please leave your details with us with your query and we will get in touch with you swiftly. Alternatively, please reach directly over call or WhatsApp our Chief Client Officer , Rohan @</p>
                <p className="normal-para" style={{ fontSize: "14px" }}>+91  9818002307</p>
              </div>
            </Row>
          </Container>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="form-group">
                  <input type="text" id="name" className="form-control" required />
                  <label className="form-control-placeholder" htmlFor="name">Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" className="form-control" required />
                  <label className="form-control-placeholder" htmlFor="Email">Email</label>
                </div>
                <div className="form-group">
                  <input type="jobtitle" id="jobtitle" className="form-control" required />
                  <label className="form-control-placeholder" htmlFor="jobtitle">Job Title</label>
                </div>
                <div className="form-group">
                  <input type="company" id="company" className="form-control" required />
                  <label className="form-control-placeholder" htmlFor="company">Company Nmae</label>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <input type="country" id="country" className="form-control" required />
                      <label className="form-control-placeholder" htmlFor="country">Country</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input type="phone" id="phone" className="form-control" required />
                      <label className="form-control-placeholder" htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="msg" id="msg" class="form-control" placeholder="Write your message" cols="30" rows="4" required></textarea>
                  <div className="text-center">
                    <button className="btn btn-primary mt-4 btn-lg text-center">Submit</button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="normal-para" style={{ fontSize: "12px", fontStyle: " italic" }}>By submitting your details, you are consenting to <strong>AIQRATE</strong> advisory & consulting sending you further email communications about latest advisory services, consulting offerings and<strong>AIQRATIONS</strong>  which may interest you. To learn more on this topic, please read our privacy policy.</p>
              </div>
            </div>
          </div>
          {/* <div style={{ backgroundColor: "#f4f4f4", height: "400px" }}> */}
          <div clasName="tutors-listing ">
                                <div className="row card-deck">
                                    <div className="col-xs-12 col-md-3 card-wrapper mb-5">
                                        <div className="row tutor card " style={{height:"380px"}}>
                                            <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                                                {/* <Card.Img variant="top" src={image4} /> */}
                                                <li>
                                                    <p>SET UP DEEP DIVE ADVISORY SESSION</p>
                                                    <p>
                                                    Would you like to set up time with us for AIQRATE's uniquely designed AI advisory & consulting sessions. Please write to us at consult@aiqrate.ai. Alternatively, please reach </p>
                                                  <p>Chief Client Officer, Rohan</p>
                                                  <p>+91 9818002307​</p>
                                                    <p>< a herf="">rohannag@aiqrate.ai</a></p>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-3 card-wrapper">
                                        <div className="row tutor card" style={{height:"380px"}}>
                                            <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                                                {/* <Card.Img variant="top" src={image4} /> */}
                                                <li>
                                                <p>SET UP DEEP DIVE ADVISORY SESSION</p>
                                                    <p>
                                                    Would you like to set up time with us for AIQRATE's uniquely designed AI advisory & consulting sessions. Please write to us at consult@aiqrate.ai. </p>
                                                  <p>Chief Client Officer, Rohan</p>
                                                  <p>+91 9818002307​</p>
                                                    <p>< a herf="">rohannag@aiqrate.ai</a></p>

                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-3 card-wrapper">
                                        <div className="row tutor card" style={{height:"380px"}}>
                                            <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                                                {/* <Card.Img variant="top" src={image4} /> */}
                                                <li>
                                                <p>SET UP DEEP DIVE ADVISORY SESSION</p>
                                                    <p>
                                                    Would you like to set up time with us for AIQRATE's uniquely designed AI advisory & consulting sessions. Please write to us at consult@aiqrate.ai. Alternatively, </p>
                                                  <p>Chief Client Officer, Rohan</p>
                                                  <p>+91 9818002307​</p>
                                                    <p>< a herf="">rohannag@aiqrate.ai</a></p>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-3 card-wrapper">
                                        <div className="row tutor card" style={{height:"380px"}}>
                                            <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                                                {/* <Card.Img variant="top" src={image4} /> */}
                                                <li>
                                                <p>SET UP DEEP DIVE ADVISORY SESSION</p>
                                                    <p>
                                                    Would you like to set up time with us for AIQRATE's uniquely designed AI advisory & consulting sessions. Please write to us at consult@aiqrate.ai. Alternatively,</p>
                                                  <p>Chief Client Officer, Rohan</p>
                                                  <p>+91 9818002307​</p>
                                                    <p>< a herf="">rohannag@aiqrate.ai</a></p>

                                                </li>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
          {/* </div> */}
        </Layout>
      )
    }
  }

  export default contactUs