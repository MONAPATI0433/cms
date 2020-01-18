
import React, { Component } from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Row, Card, Col } from "react-bootstrap"
// import "./aiqrate-eng-model.css"
import {
    FaPeopleCarry
} from "react-icons/fa"
import image3 from '../images/86-p.jpg'
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
class Aiqrtae extends Component {
    render() {

        return (

            <div>
                <Layout location={this.props.location}>
                    <img src={image3} style={{ height: "300px", width: "100%" }} />
                    <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                        <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;About Us /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp;AIQRATE Engagement Model</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>AIQRATE Engagement Model</h2>
                    <Container>
                        <p className="mt-3 normal-para" >We have learnt that in order to provide bespoke advisory services and consulting offerings to our clients, we have to offer utmost confidentiality, uninterrupted access and approachability to our clients.  Time and confidentiality are critical for decision making and we appreciate the importance of being accessible on a swift turnaround basis to provide incisive insights and recommendations.  We offer flexible, unique, bespoke and curated advisory services and consulting offerings that are suitable for a broad range of clients. </p>
                        <p className="mt-3 normal-para" >AIQRATE deploys multiple and unique engagement models for providing advisory services and consulting offerings</p>
                    </Container>
                    <Container className="mt-5 text-center">
                        <h1 className="mb-5 align-self-center"><strong>THIS </strong>SPANS</h1>
                    </Container>

                   
                    <Container className="mt-4 text-center">

                        <Row>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>

                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>Resident advisory model/Advisory
        retainership model/flex advisory model</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>Invest-in-AI advisory model: stipulated
                                        time slots of deep and contextualized
                                        advisory services on month/quarter/bi-
                                                annual/annual time period</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>Exclusive call/video conferencing
                                        sessions with VC/PE partners, business
                                            stakeholders</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>Bespoke and thematic AI
                                            reports/content/slide decks on demand</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-4 text-center">

                        <Row>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>

                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>AI strategy playbooks and toolkits on-
    demand</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>AI consulting frameworks, assessments
                                                and artifacts on-demand</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>AI masterclass, workshops and
                                        evangelization session with business
                                            stakeholders, CXOs and Senior leaders</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>AI CoE construct consulting mode</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-4 text-center">

                        <Row>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>AI partner selection consulting model</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>Chief AI Officer on demand: AI strategy
                                        to adoption to interventions for
                                            outcomes</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>Exclusive call/video conferencing
                                        sessions with VC/PE partners, business
                                            stakeholders</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card" style={{ backgroundColor: "#f4f4f4", height: "214px" }}>
                                    <Card.Body>
                                        < FaPeopleCarry style={{ textAlign: "center" }} /><br></br>
                                        <p className="mt-3 normal-para" style={{ fontSize: "13px" }}>Bespoke and thematic AI
                                            reports/content/slide decks on demand</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <p className="mt-5 mb-5 normal-para" >
                            We don’t treat clients on the monetary business value.  Irrespective of the nature and duration of the assignment and deliverable we undertake, we assiduously commit full rigor and diligence on effort commitment.
                                    </p>
                    </Container>
                </Layout>
            </div>
        )
    }
}
export default Aiqrtae