
    import React, { Component } from 'react'
    import Layout from "../components/layout"
    import { Link } from "gatsby"
    import { Container, Row,  Col,  } from "react-bootstrap"
    import image3 from '../images/bg-team-p.jpg'
    import image4 from '../images/img_avatar.png'
    import "./aiqrateteam.css"
    // import Img from "gatsby-image"
    // import { useStaticQuery, graphql } from "gatsby"
    class AIQRATETEAM extends Component {
        render() {

            return (

                <div>
                    <Layout location={this.props.location}>
                        <img src={image3} alt="no image" style={{ height: "300px", width: "100%" }} />
                        <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                            <p className="text-white " ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;About Us /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp;AIQRATE Team</Link></p>
                        </div>
                        <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>AIQRATE Team</h2>
                        <Container>
                            <Row>
                                <div className="block"> 
                                <Col className="center">
                                <img src={image4} alt="no image" style={{ height: "250px", width: "50%" }}/>
                                <h5 className="ml-3">Sameer Dhanrajani</h5>
                                <p className="ml-3">Chief Executive Officer & Co-founder</p>
                                <p className="ml-3">sameerdhanrajani@aiqrate.ai</p>
                                </Col>
                                </div>
                                <Col className="matter center"  style={{backgroundColor:"#f4f4f4",marginLeft:"-204px"}}>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                </Col>
                                
                            </Row>
                        </Container>
                        <Container className="mt-5" style={{backgroundColor:"#f4f4f4"}}>
                            <Row>
                                <div className="block"> 
                                <Col className="center">
                                <img src={image4} alt="no image" style={{ height: "250px", width: "50%" }}/>
                                <h5 className="ml-3">Rohan Nag</h5>
                                <p className="ml-3">Chief Client Officer & Co-founder</p>
                                <p className="ml-3">rohannag@aiqrate.ai</p>
                                </Col>
                                </div>
                                <Col className="matter center"  style={{marginLeft:"-204px"}}>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                </Col>
                                
                            </Row>
                        </Container>
                        <Container className="mt-5 mb-5">
                            <Row>
                                <div className="block"> 
                                <Col className="center">
                                <img src={image4} alt="no image" style={{ height: "250px", width: "50%" }}/>
                                <h5 className="ml-3">NK (Nandakumar Ramaiah)</h5>
                                <p className="ml-3">Chief Technology Officer & Co-founder</p>
                                <p className="ml-3">nk@aiqrate.ai</p>
                                </Col>
                                </div>
                                <Col className="matter center"  style={{backgroundColor:"#f4f4f4",marginLeft:"-204px"}}>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p className="normal-para">
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                <p >
                                Sameer is a globally recognized AI advisor, business builder, evangelist and thought leader known for his deep knowledge, strategic consulting approaches 
                                </p>
                                </Col>
                                
                            </Row>
                        </Container>
                    </Layout>
                </div>
            )
        }
    }
    export default AIQRATETEAM