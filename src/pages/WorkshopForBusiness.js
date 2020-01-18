import React, { Component } from "react"
import Layout from "../components/layout"
import {
  Container,
  Row,
} from "react-bootstrap"
import img20 from "../images/bg-advisory-p.jpg"

export default class WorkshopForBusiness extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img20}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <p className="normal-para">
          Enterprises are gearing to curate AI within their strategy and planning sessions. However, the leadership struggles with the What, Why and How of including AI in their strategies. An ideal place to create an intervention to correct this would be during the business strategy sessions, planning workshops and strategy offsites.
          </p>
          <p className="normal-para mt-2">
          AIQRATE can design a customized immersion session for the leadership to demystify AI. This would be a combination of AI driven masterclasses, interactive brainstorming, assessments and role-playing. This would allow the leadership to become acclimatized to the latest art of possible with AI with regard to their businesses and accordingly strategize their business roadmaps and strategy sessions.
          </p>

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
                  
                
               
                
              </div>
            </div>
         
          </Row>
          
     
        </Container>
      </Layout>
    )
  }
}
