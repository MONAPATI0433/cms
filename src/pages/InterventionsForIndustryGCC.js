import React, { Component } from 'react'
import Layout from '../components/layout'
import {
    Container,
    Row,
    Col,
    Card,
  } from "react-bootstrap"
  import img14 from "../images/bg-advisory-p.jpg"
  import StrategicImg from "../images/Strategic-Interventions-for-AI@scale.jpg"
  import cardImg1 from "../images/86-p.jpg"
  import cardImg2 from "../images/Landing3.jpg"
  import { Link } from "gatsby"
export default class InterventionsForIndustryGCC extends Component {
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
          <p className="normal-para">
          AIQRATE possesses deep expertise aided with bespoke models and frameworks that streamlines the usage of AI for maximizing value in different industry segments and business functions. Our customized consulting approaches reimagine AI driven customer experience, enable innovative products and services and accentuate transformation of businesses and functions.
          </p>
          {/* <p>The bespoke masterclasses we offer:</p> */}

          <div className="d-sm-block d-lg-flex">
            <Col className="">
              <p className="offers">AI Embedded Industry Segments</p>

              <ul>
                <li className="list-styles">Banking & Financial Services</li>
                <li className="list-styles">Insurance</li>
                <li className="list-styles">Retail & CPG</li>
                <li className="list-styles">Life Sciences & Healthcare</li>
                <li className="list-styles">
                  Manufacturing, Energy & Utilities
                </li>
              </ul>
            </Col>
            <Col className="">
              <p className="offers">AI Enabled Business Functions</p>

              <ul>
                <li className="list-styles">Human Resources</li>
                <li className="list-styles">Sales & Account Management</li>
                <li className="list-styles">Marketing & Brand Management</li>
                <li className="list-styles">Financial Planning & Accounting</li>
                <li className="list-styles">Risk & Fraud</li>
                <li className="list-styles">Information Technology</li>
              </ul>
            </Col>
          </div>
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
