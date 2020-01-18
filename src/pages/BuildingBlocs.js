import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import img6 from "../images/bg-advisory-p.jpg"
import BuildingBlocsImg from "../images/Building-Blocks-for-an-AI-Strategy.jpg"

export default class BuildingBlocs extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img6}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <p className="normal-para">
            No two organizations will adopt AI in similar way. Every
            organization has its own strategic imperatives and business
            implications to cogitate before it embarks on its own agenda of
            crafting an AI strategy. CXOs are unclear on how the building blocks
            of AI strategy gets defined and implemented. To demystify the
            building blocks of AI strategy, the quintessential aspects of
            answering the following questions need to come in:
          </p>
          <ul>
                <li className="list-styles">What business goals and accomplishments can organization achieve by deploying AI?</li>
                <li className="list-styles">How can AI become a competitive advantage and secret sauce for the organization?</li>
                <li className="list-styles">Are the existing technologies and processes sufficient for an AI enabled organization?</li>
                <li className="list-styles">How to create the optimal AI global partner ecosystem?</li>
                <li className="list-styles">How do insights, intelligence and recommendations (I2R framework) get augmented through AI within the organization?</li>
          </ul>
          <Row>
            <Col lg="4 p-0" p="0">
              <img
                style={{ margin: 0 }}
                src={BuildingBlocsImg}
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
