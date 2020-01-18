import React, { Component } from "react"
import Layout from "../components/layout"
import {
  Container,
  Row,
  Col,
} from "react-bootstrap"
import img16 from "../images/bg-advisory-p.jpg"
import Startup from "../images/Startup-draft-pic.png"
export default class Startups extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img16}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          {/* <p className="text-primary">
            Enterprises must intertwine AI with human intelligence.
          </p> */}

          <Row>
            <Col lg={6}>
              <img src={Startup} alt="Startup" style={{ height: "auto" }} />
            </Col>
            <Col lg={6}>
              <p className="normal-para mt-2">
                Startups are at a vantage position to derive strategic
                advantages accruing from leveraging AI. Armed with accessible
                funding, young and upbeat talent professionals and overall
                buoyancy in the demand consumption, Startups are increasingly
                challenging the status quo and upending incumbent businesses as
                well as disrupting the value chains of existing and adjacent
                industries. This is attributed to their willingness to embed AI
                across the business value chain to acquire, retain customers,
                and augment their market share.
              </p>
            </Col>
            <p className="normal-para">
              Business and functional use cases of AI range far and wide. It is
              imperative that startups first consider their business model to
              identify the drivers of their businesses, estimate potential
              uplift and time-to-value to prioritize the order in which AI
              interventions are infused and deployed. With our extensive
              experience of working with cutting edge, deep tech global AI
              startups, AIQRATE is best placed as an advisor and mentor to
              startups on their transformative journey.
            </p>
          </Row>
          {/* <p>The bespoke masterclasses we offer:</p>
          <Row>
            <ul>
              <li className="list-styles">
                AI Talent Mapping/ Career Lattice Strategy
              </li>
              <li className="list-styles">Talent Acquisition Strategy</li>
              <li className="list-styles">
                AI Learning & Development Strategy
              </li>
            </ul>
          </Row>

          <Row>
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
