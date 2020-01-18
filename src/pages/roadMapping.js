import React, { Component } from "react"
import Layout from "../components/layout"
import {
  Container,
  Row,
  Col,
  Card,
  CardColumns,
  CardDeck,
  Button,
} from "react-bootstrap"
import img21 from "../images/bg-advisory-p.jpg"
import StrategicImg from "../images/Strategic-Interventions-for-AI@scale.jpg"
import cardImg1 from "../images/86-p.jpg"
import cardImg2 from "../images/Landing3.jpg"
import { Link } from "gatsby"

export default class roadMapping extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img21}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <p className="text-primary">
            AI paradox: Isolated, piece-meal use cases can grind to a halt when
            interacting at scale unless enterprises transform their business
            models.
          </p>

          <Row>
            <Col lg={6}>
              {/* <img
                src={jaurny}
                alt="bg-home-wgatwedo"
                style={{ height: "auto" }}
              /> */}
            </Col>
            <Col lg={6}>
              <p className="normal-para mt-2">
                Several business leaders today aspire to implement AI in their
                businesses, but do not know where to start. There are many who
                have successfully used analytics in their decision making and
                now want to morph the enterprise into becoming AI centric.
                Curating the path to reimagining the decision making due to
                advancements in areas like computer vision, conversational AI,
                image classification and algorithmic decision making is the
                journey enterprises are aspiring to traverse.
              </p>
              <p className="normal-para">
                An in-depth assessment of an enterprise’ AI readiness is
                ascertained using AIQRATE’s AI Maturity Continuum Framework.
              </p>
            </Col>
            <p className="normal-para">
              Based on the assessment, AIQRATE’s Elevate AI Transformation
              Journey framework is ideal in giving strategic direction to
              business leaders and decision makers on their AI journey. The
              AIQRATE’s Elevate AI Transformation Journey framework is a
              combination of:
            </p>
            <ul>
              <li className="list-styles">
                AI vision and business ROI management
              </li>
              <li className="list-styles">
                Ready to deploy PoC execution and contextualized use case
                generation
              </li>
              <li className="list-styles">
                Detailed AI road-mapping (short, medium and long-term plans)
                scenarios
              </li>
              <li className="list-styles">
                Internal evangelization and Go to market strategy formulation
              </li>
            </ul>
            <p className="normal-para">
              AIQRATE’s structured approach and frameworks build a robust
              foundation across the business value chain to implement an AI
              regime within an accelerated turn-around time.
            </p>
          </Row>
          <h2 className="align-self-center">VIDEOS</h2>
          <Row>
          
          
          <div clasName="tutors-listing w-100" style={{width:'100%'}}>
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
                
                
               
                
              </div>
            </div>
         
          </Row>
        </Container>
      </Layout>
    )
  }
}
