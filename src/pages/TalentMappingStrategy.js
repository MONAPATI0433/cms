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
export default class TalentMappingStrategy extends Component {
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
                AI talent acquisition and management is lagging the fast-paced
                nature of AI adoption. Enterprises are struggling to define the
                skills and competencies required to fulfil their needs and
                furthermore find the right talent. In addition, the
                ever-evolving nature of exponential technologies and algorithm
                driven tools demands a scientific, process-oriented AI skilling
                regime.
              </p>
            </Col>
            <p className="normal-para">
              The AIQRATE T-Rex Framework creates a structure to define the
              enterprises’ AI centric job roles and the ensuing competency
              mapping. AIQRATE will knit tailormade talent sourcing strategy
              artifacts coupled with creating an AI focused learning &
              development program addressing new age skills and competencies.
            </p>


           
          </Row>
          <p>The bespoke masterclasses we offer:</p>
          <Row>
          <ul>
                <li className="list-styles">AI Talent Mapping/ Career Lattice Strategy</li>
                <li className="list-styles">Talent Acquisition Strategy</li>
                <li className="list-styles">AI Learning & Development Strategy</li>
              </ul>
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
                
                
               
                
              </div>
            </div>
         
          </Row>
        </Container>
      </Layout>
    )
  }
}
