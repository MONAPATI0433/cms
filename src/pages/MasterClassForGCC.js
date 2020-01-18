import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Card } from "react-bootstrap"
import img14 from "../images/bg-advisory-p.jpg"
import StrategicImg from "../images/Strategic-Interventions-for-AI@scale.jpg"
import cardImg1 from "../images/86-p.jpg"
import cardImg2 from "../images/Landing3.jpg"
import { Link } from "gatsby"
import profile from "../images/Update-file_AI-Masterclass-for-Enterprises.png"

export default class MasterClassForGCC extends Component {
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
          <p className="text-primary">
            Enterprises must intertwine AI with human intelligence.
          </p>

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
                The AI Masterclass for GCCs will compel CXOs, Senior leaders and
                decision makers to cogitate towards developing AI strategies in
                conjunction with developing frameworks and action plans for
                leveraging AI capabilities to inculcate Transformation,
                Innovation and Disruption dynamics. They will also be showcased
                with topical scenarios, industry specific applications, best
                practices and global trends in the AI arena.
              </p>
            </Col>
            <p className="normal-para">
              The AI Masterclass will allow you to know your GCCs’ readiness
              towards adopting AI and/or develop a roadmap to further bring
              value through AI.
            </p>
          </Row>
          <Row>
          
          <h2 className="align-self-center">VIDEOS</h2>
          <div clasName="tutors-listing">
              <div className="row card-deck">
              <div className="col-xs-12 col-md-4 card-wrapper">
                  <div className="row tutor">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12">
                    <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                    </iframe>
                        
                    </div>
                  </div>
                </div>
                  <div className="col-xs-12 col-md-4 card-wrapper">
                    <div className="row tutor">
                      <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      <iframe width="100%" height="100%"
                              src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                      </iframe>
                          
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4 card-wrapper">
                    <div className="row tutor">
                      <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      <iframe width="100%" height="100%"
                              src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                      </iframe>
                          
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4 card-wrapper">
                    <div className="row tutor">
                      <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      <iframe width="100%" height="100%"
                              src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                      </iframe>
                          
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-md-4 card-wrapper">
                    <div className="row tutor">
                      <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      <iframe width="100%" height="100%"
                              src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                      </iframe>
                          
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4 card-wrapper">
                    <div className="row tutor">
                      <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      <iframe width="100%" height="100%"
                              src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                      </iframe>
                          
                      </div>
                    </div>
                  </div>
                  
                
               
                
              </div>
            </div>
         
          </Row>
          
        </Container>
      </Layout>
    )
  }
}
