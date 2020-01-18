import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import img16 from "../images/bg-advisory-p.jpg"
export default class PitchesForInternalAndExternal extends Component {
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
              AIQRATE provides services to GCCs for the creation of strategic
              pitches to internal leadership as well as external clients. These
              services are on an advisory basis where AIQRATE leverages its
              library of frameworks and templates to construct pitches like the
              build vs buy vs outsource decision or the marketing landscape.
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
