import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import {Link} from "gatsby"
import img3 from "../images/bg-advisory-p.jpg"
import BuildingPowerAImg from "../images/Building-an-AI-Powered-Organization.jpg"

export default class BuildingPowerAi extends Component {
  render() {
    return (
      <Layout>
        <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <img
          style={{ margin: 0 }}
          src={img3}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <div className="page-title">
          <h5 className="page-links">
            <Link to="/">Home</Link>/Advisory
            <Link>Advisory</Link>
            /Building AI Powered Organizations
          </h5>
          <p className="title-text">Building AI Powered Organizations</p>
        </div>

      </div>

        <Container>
          <p className="normal-para">
            AI is reshaping business and the ways AI can be used to augment
            decision making keep expanding. Despite the blistering advancement
            of AI technologies, organizations are struggling to keep up in terms
            of adoption.
          </p>

          <p className="normal-para">
            Many organizations have used AI in piece-meal with short-term
            success, but the true beneficiaries are those who have made 
            <strong> AI pervasive in their organizations </strong>– from boardrooms to shop-floors.
            The secret is that is that for AI to be embedded in the DNA of an
            organization, it requires the  <strong> re-design of business processes,
            people practices and culture. </strong> Companies that excel at implementing
            AI throughout the organization will find themselves at a great
            advantage in a world where humans and machines working in synergy
            will outperform.
          </p>
          <p className="normal-para">
            AIQRATE advises businesses on how to <strong> re-engineer their
            organization’s structure</strong> to be AI ready and how to make AI an
            integral part of their <strong> secret sauce to success.</strong>
          </p>
          <Row>
            <Col lg="4 p-0" p="0">
              <img
                style={{ margin: 0 }}
                src={BuildingPowerAImg}
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
                        abstract on Building an AI Powered Organization.
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
