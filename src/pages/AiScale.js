import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import img4 from "../images/bg-advisory-p.jpg"
import StrategicImg from "../images/Strategic-Interventions-for-AI@scale.jpg"

export default class AiScale extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img4}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <p className="text-primary">
            AI@scale unleashes larger changes in strategy models than
            traditional business planning exercises. Are you geared up for
            AI@scale?
          </p>
          <p className="normal-para">
            CXOs in enterprises are increasingly looking to AI to create new
            sources of business value and transformation. Doubling down on AI
            investments, building bleeding edge competencies and infusing AI
            driven functionalities across the value chain of products and
            services will be required to take AI to scale.
          </p>
          <p className="normal-para">
          Leading organizations are pulling ahead of their counterparts by deepening their commitments to AI and focusing on revenue generating applications along with cost savings; these early adopters are positioning themselves to reap the benefits of AI@scale. The four-dimensional framework of crafting a robust AI architecture, orchestrating an AI enabled ecosystem, assimilating right talent, skills & processes and creating a robust governance and enterprise structure are deeply embedded to bring AI@scale.
          </p>
          <Row>
            <Col lg="4 p-0" p="0">
              <img
                style={{ margin: 0 }}
                src={StrategicImg}
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
