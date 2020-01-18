

import React, { Component } from 'react'
import Layout from "../components/layout"
import { Container, Row, Card } from "react-bootstrap"
import { Link } from "gatsby"
import image3 from '../images/bg-ourapproach-p.jpg'
import { GiChessKnight } from "react-icons/gi"
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
class Approach extends Component {
    render() {
        //     const data = useStaticQuery(graphql`
        //     query {
        //       Image: file(relativePath: { eq: "IOCN-HORSE.png" }) {
        //         childImageSharp {
        //           fluid(maxWidth:20) {
        //             ...GatsbyImageSharpFluid
        //           }
        //         }
        //       }
        //     }
        //   `)

        return (
            <div>
                <Layout location={this.props.location}>
                    <img src={image3} style={{ height: "300px", width: "100%" }} />
                    <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                        <p className="text-white " ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;About Us /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp; Our Approach</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}> Our Approach</h2>
                    <Container>
                        <h5 className="mt-5 text-blue" style={{ borderLeft: '5px solid blue', color: "blue" }}>&nbsp;&nbsp;&nbsp;Enabling clients reimagine their decision making with AI strategy in a transformation, innovation and &nbsp;&nbsp;disruption driven
                &nbsp;world</h5>
                        <p className="mt-5 normal-para">In today’s fast paced VUCA world, leaders face unprecedented challenges. They need to navigate through volatility while staying focused on strategy,
                    business performance and culture.  <strong>Artificial Intelligence</strong> is fast becoming a game changing catalyst and a strategic differentiator and almost a panacea to
                    solve large, complex and unresolved problems.  To be an <strong>AI powered organization,</strong> leaders not only need to have a broad understanding of <strong>AI strategy, </strong>
                            they need to know how and where to use it.  AIQRATE advisory services and consulting offerings are designed to enable leaders and decision makers
                    from <strong>Enterprises, GCCs, Startups, SMBs, VC/PE firms, Public Institutions and Academic Institutions</strong> </p>
                    </Container>
                    <Container className="mt-5 ">
                        <h2 className="mb-5 align-self-center"><strong>WE DO </strong>THIS BY</h2>
                        <Row className="engage-row mb-5">
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                                            <GiChessKnight className="b-fa" />
                                        </div>
                                        <div className="para-icon">
                                            <span className="text">
                                                Crafting bespoke and contextualized AI master class workshops, immersion sessions and roundtables to evangelize and demystify AI strategy, scenarios and adoption
                </span>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                                            <GiChessKnight className="b-fa" />
                                        </div>
                                        <div className="para-icon">
                                            <span className="text">
                                                Curating an AI Strategy that aligns with your business priorities and helps you prepare for an AI powered enterprise with the ability to build an AI @Scale ecosystem
                </span>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                                            <GiChessKnight className="b-fa" />
                                        </div>
                                        <div className="para-icon">
                                            <span className="text">
                                                Creating a customized advisory approach that ascertains the nature of the consulting offering that enables you to navigate the AI strategy with the help of our proprietary playbooks, toolkits and assessments
                </span>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                                            <GiChessKnight className="b-fa" />
                                        </div>
                                        <div className="para-icon">
                                            <span className="text">

                                                Working closely with you to implement the bespoke AI strategy through our AI COE Paragon framework and AI Confluence partner ecosystem assessment developed specifically for your unique needs.
                </span>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </Layout>
            </div>
        )
    }
}
export default Approach