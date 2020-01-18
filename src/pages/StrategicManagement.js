import React, { Component } from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import img17 from "../images/bg-advisory-p.jpg"
import Stategybooks from "../images/Reimagining-Strategic-Management-Theories-Models-with-AI.jpg"

export default class StrategicManagement extends Component {
  render() {
    return (
      <Layout>
        <div>
        <img
          style={{ margin: 0 }}
          src={img17}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <div className="page-title">
          <h5 className="page-links">
            <Link to="/">Home</Link>/
            <Link>Advisory</Link>/Reimagining Strategic Management Theories & Models with AI
          </h5>
          <p className="title-text">Reimagining Strategic Management Theories & Models with AI</p>
        </div>
        </div>
        
        <Container>
          <p className="normal-para">
            The advent of Artificial Intelligence in the corporate world is
            disrupting existing business processes and changing the way
            organizations are run. Given the scale of its impact, there is no
            doubt that AI will have a severe impact on the science and
            management theories that governs how organizations are run today.
          </p>

          <p className="normal-para">
            Management theories are <strong> frameworks of wisdom </strong> which guide the
            decisions made by organizational leaders that have survived
            phenomenally well over the period of the modern enterprise. With
            AI’s entry into the mainstream of business, management theories need
            to be re-evaluated and tweaked appropriately to include the  <strong> new-age
            reality of AI.</strong>
          </p>
          <p className="normal-para">
            AIQRATE has curated traditional management frameworks to create
            <strong> modern-age, AI ready artifacts </strong> to be applied by new age managers and
            business leaders to drive intelligent businesses of today.
          </p>
          <Row>
            <Col lg="4 p-0" p="0">
              <img
                style={{ margin: 0 }}
                src={Stategybooks}
                alt="Landing3"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col lg="8 p-0" p="0">
              <div
                className="container-fluid formcontent"
                style={{ background: "#2d3047", height: "100%" }}
              >
                <div className="container">
                  <Row className="justify-content-center text-white">
                    {/* <h2 className="align-self-center">
                  Sign up for our Newsletter AIQRATE
                </h2> */}
                    <p className="align-self-center">
                      <small>
                        Please fill in the below details for us to send you the
                        abstract of Reimagining Strategic Management Models and
                        Theories with AI.
                      </small>
                    </p>

                    <Form className="w-75">
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCompany">
                          <Form.Label>Company</Form.Label>
                          <Form.Control type="text" placeholder="Company" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formJobTitle">
                          <Form.Label>JobTitle</Form.Label>
                          <Form.Control type="text" placeholder="JobTitle" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGroupEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="email" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formPhone">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Phone number"
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCity">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                      </Form.Row>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Row>
                </div>
              </div>
            </Col>
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
