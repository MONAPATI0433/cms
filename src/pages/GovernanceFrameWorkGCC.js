import React, { Component } from "react"
import Layout from "../components/layout"
import {
    Container,
    Row,
    Col,
    Card,
  } from "react-bootstrap"
  import img19 from "../images/bg-advisory-p.jpg"
  import cardImg1 from "../images/86-p.jpg"
  import cardImg2 from "../images/Landing3.jpg"
  import { Link } from "gatsby"
  import tRex from "../images/T-rex.png"
export default class GovernanceFrameWorkGCC extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img19}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          {/* <p className="text-primary">
            Enterprises must intertwine AI with human intelligence.
          </p> */}

          <Row>
            <Col lg={6}>
              <img
                src={tRex}
                alt="bg-home-wgatwedo"
                style={{ height: "auto" }}
              />
            </Col>
            <Col lg={6}>
              <p className="normal-para mt-2">
                A majority of AI based initiatives are seen to fail not because
                of technology gaps or implementation flaws but because of a lack
                of controllership. Once a roadmap is laid out, the overall
                program needs management and ownership to have the bigger
                picture strategy succeed. Thus, a robust AI governance framework
                is essential especially for GCCs.
              </p>
            </Col>
            <p className="normal-para">
              AIQRATE’s Ballance Framework contains a detailed step by step
              methodology to setup and maintain a robust AI governance regime.
              The framework consists of artifacts, templates and best practices
              which will accelerate the process and reduce effort.
            </p>
          </Row>
          {/* <p>The bespoke masterclasses we offer:</p>
          <Row>
          <ul>
                <li className="list-styles">AI Talent Mapping/ Career Lattice Strategy</li>
                <li className="list-styles">Talent Acquisition Strategy</li>
                <li className="list-styles">AI Learning & Development Strategy</li>
              </ul>
          </Row> */}

          {/* <Row>
            <h2 className="align-self-center">VIDEOS</h2>

            <div clasName="tutors-listing">
              <div className="row card-deck">
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
                      <Card.Img variant="top" src={cardImg1} />
                      <li>
                        <Link to="/">Enterprises</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/">Global Capability Centres (GCCs)</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
                      <Card.Img variant="top" src={cardImg1} />
                      <li>
                        <Link to="/">Startups</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/">
                          Venture Capital & Private Equity Firms
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/">
                          Small & Medium sized Businesses (SMBs)
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
                      <Card.Img variant="top" src={cardImg1} />
                      <li>
                        <Link to="/">Academic Institutions</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper border">
                  <div className="row tutor">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      VIDEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row> */}
        </Container>
      </Layout>
    )
  }
}
