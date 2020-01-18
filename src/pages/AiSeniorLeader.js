import React, { Component } from "react"
import Layout from "../components/layout"
import {Link} from 'gatsby'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import img5 from "../images/bg-advisory-p.jpg"
import playbooks from "../images/playbook.jpg"

export default class AiSeniorLeader extends Component {
  render() {
    return (
      <Layout>
        <div>
        <img
          style={{ margin: 0 }}
          src={img5}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <div className="page-title">
          <h5 className="page-links">
            <Link to="/">Home</Link>/
            <Link>Advisory</Link>/AI for CXOs & Senior Leaders
          </h5>
          <p className="title-text">AI for CXOs & Senior Leaders</p>
        </div>
        </div>
        
        <Container>
          <p className="normal-para">
            We are ushering into an AI era – an algorithm driven economy where
            algorithms sit at the core of every business model and in the
            organization DNA. With our proven and deep experience of AI
            consulting with CXOs & Senior leaders of several Fortune 500
            enterprises, Indian conglomerates, GCCs and SMBs; AIQRATE has
            developed
            <strong>
              bespoke & customized primers, playbooks and toolkits
            </strong>
            for CXOs & Senior leaders for crafting and executing AI strategies
            in their enterprises and business functions:
            <strong>
              
              sales, marketing, HR, IT, Financial Planning & Analysis
            </strong>
            for end-to-end transformative impact.strong The primers, playbooks
            and toolkits have been embedded with state of art deployable
            <strong> frameworks, assessments and ontologies </strong> with
            specific focus on industry segments, business functions and global
            AI partner ecosystem infusion.
          </p>

          <p className="normal-para">
            At AIQRATE, we also closely work with CXOs, senior leaders and
            decision makers on
            <strong>
              AI focused workshops, leadership roundtables, panel discussions,
              webinar participations, keynote speaking engagements and resident
              advisory services.
            </strong>
          </p>
          <Row>
            <Col lg="4 p-0" p="0">
              <img
                style={{ margin: 0 }}
                src={playbooks}
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
                        abstract of the <strong> AI playbook for CXOs and Senior leaders.</strong>
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
