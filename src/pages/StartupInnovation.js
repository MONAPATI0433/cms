import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import img16 from "../images/bg-advisory-p.jpg"
import Startup from "../images/Startup-draft-pic.png"
export default class StartupInnovation extends Component {
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
          <Row>
            <p className="normal-para">
              GCCs are constantly on the lookout for opportunities to accelerate
              their innovation inorganically. AIQRATE will leverage its
              extensive partner network eco-system to organize roadshows where
              global, Deep-tech AI startups with synergic offerings will be
              showcased to the GCC
            </p>
          </Row>
           <Row>
            {/* <h2 className="align-self-center">VIDEOS</h2> */}

            {/* <div clasName="tutors-listing">
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
            </div> */}
          </Row>
        </Container>
      </Layout>
    )
  }
}
