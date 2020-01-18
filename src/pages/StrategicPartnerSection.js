import React, { Component } from "react"
import Layout from "../components/layout"
import {
  Container,
  Row,
  Col,
} from "react-bootstrap"
import img18 from "../images/bg-advisory-p.jpg"
import Partner from "../images/AI-Strategic-Partner-ecosystem-for-Enterprises.png"
export default class StrategicPartnerSection extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img18}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <Row>
            <Col lg={6}>
              <img
                src={Partner}
                alt="bg-home-wgatwedo"
                style={{ height: "auto" }}
              />
            </Col>
            <Col lg={6}>
              <p className="normal-para mt-2">
                Enterprises today are looking to accelerate their innovation and
                transformation quotient in niche areas by partnering with a
                broad spectrum of the external ecosystem. The AI revolution has
                spawned several global boutique and niche deep-tech AI startups
                across products, solutions and services categories.
              </p>
              <p className="normal-para">
                AIQRATE’s Confluence framework is designed to help enterprises
                identify the pertinent capability partners to accelerate their
                AI maturity journey. AIQRATE scans and assesses multiple global
                startups and boutique firms based on its proprietary Partnership
                Scoring tool which is built on multiple measurable criteria:
                capability synergies, product, solution maturity, GTM
                approaches, client base and vision roadmaps. We also program
                manage your RFP process for AI interventions on request based on
                defined key success factors to arrive at the ideal partner
                selection.
              </p>
            </Col>
            <p className="normal-para">
              The AIQRATE Confluence framework accelerates the enterprise’s
              inorganic growth strategy for partner selection and the
              synergistic fitment..
            </p>
          </Row>
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
