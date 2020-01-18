import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import img14 from "../images/bg-advisory-p.jpg"
import profile from "../images/Update-file_AI-Masterclass-for-Enterprises.png"
export default class CeoToolkitForGCC extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img14}
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
                src={profile}
                alt="bg-home-wgatwedo"
                style={{ height: "auto" }}
              />
            </Col>
            <Col lg={6}>
              <p className="normal-para mt-2">
                AI Centre of Excellence within GCCs are key value drivers of
                disruption and transformation. AI CoEs are set up not just for
                cost arbitrage but go all the way to tap into right talent and
                nurture in-house innovation. Business impact is being generated
                through AI driven process innovation and revealing new sources
                of revenue for stakeholders.
              </p>
            </Col>
            <p className="normal-para">
              AIQRATE’s Beacon Framework guides an GCC through the journey of
              the setup of an AI CoE, its incremental evolution as well as the
              demonstratable value creation for the business.
            </p>
          </Row>
          {/*  <Row>
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
                      VIDEO data
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
