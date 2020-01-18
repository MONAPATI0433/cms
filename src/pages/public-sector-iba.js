
import React, { Component } from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Row, Card, Col } from "react-bootstrap"
import image3 from '../images/bg-psi-p.jpg'
import image4 from '../images/Update-file_Public-Sector.png'
class PUBLICSECTORIBA extends Component {
    render() {
        return (
            <div>
                <Layout location={this.props.location}>
                    <img src={image3} style={{ height: "300px", width: "100%" }} />
                    <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                        <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/consulting" style={{ color: "white" }}>&nbsp;Consulting /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp;public-sector-institutions-business-associations</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>public-sector-institutions-business-associations</h2>
                    <Container style={{ marginTop: "-70px" }}>
                    <p>AIQRATE consulting themes for Public Sector Institutions & Business Associations are:</p>
                        <Row>
                        <Col md={6}>
                        <img src={image4} style={{ width: "100%", height: "400px" }} />
                        </Col>
                        <Col md={6}>
                            <p className="normal-para mt-2">
                                AIQRATE is enabling public sector institutions, global & Indian business associations and industry consortium
                                harness the power of AI to solve large, complex and unresolved problems as well as collaborating with policy
                                makers and business associations stakeholders to position India as a premier nation in AI. Through our
                                collaboration with several AI ecosystem players, the<strong> AI experts’ network and a vast repository of in-house
                                AI reports and analysis,</strong> we have been contributing to making a significant impact to public sector institutions
                                and business associations.
                                </p>
                            
                            </Col>
                        </Row>
                    </Container>
                    <div className="container">
                    <h2 className="align-self-center">VIDEOS</h2>
                        <div className="row">
                            <Col md={4}>
                                <iframe width="" height="" src="//www.youtube.com/embed/29gaiZ6lIlo"></iframe>
                            </Col>
                            <Col md={4}>
                                <iframe width="" height="" src="//www.youtube.com/embed/DDZsEkRJqpk"></iframe>
                            </Col>
                            <Col md={4}>
                                <iframe width="" height="" src="//www.youtube.com/embed/BvLONo7iCgI"></iframe>
                            </Col>
                        </div>
                    </div>
                   
                </Layout>
            </div>
        )
    }
}
export default PUBLICSECTORIBA