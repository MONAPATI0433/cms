import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Card} from "react-bootstrap"
import img12 from "../images/bg-advisory-p.jpg"
import cardImg1 from '../images/86-p.jpg'
import cardImg2 from '../images/Landing3.jpg'
import { Link } from "gatsby"

export default class Enterprises extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img12}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
        <p className="text-primary">
      Enterprises must intertwine AI with human intelligence.
          </p>
          <p className="normal-para">
          As we approach the AI era, where Artificial Intelligence (AI) led enterprise transformation is gaining relevance and becoming mainstream, “What is our AI strategy?” will soon become a ubiquitous part of most enterprises and boardroom discussions. CXOs, Senior leaders and decision makers are aware that AI adoption has evolved from being a case of FOMO (Fear of Missing Out), to defining a compelling strategy for competitive advantage and in extension, a matter of corporate survival.
          </p>
          <p className="normal-para">
          At AIQRATE, with our proven expertise and seasoned experience coupled with bespoke frameworks and artifacts, we dive deep with you to craft your enterprise wide AI strategy
          </p>
          
         
      {/* <Row>
      <div clasName="tutors-listing">
    <div className="row card-deck">
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
              <Card.Img variant="top" src={cardImg1} />
                <li>
                <Link to='/'>
                AI Masterclass for Enterprises
                </Link>
                
                </li>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
          <Card.Img variant="top" src={cardImg2} />
                <li>
                <Link to='/'>
                
                AI Masterclasses for Industry Segments and Business Functions
                </Link>
                
                </li>
            </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
          <Card.Img variant="top" src={cardImg1} />
                <li>
                <Link to='/'>
                AI CoE Toolkits for Enterprises
                </Link>
                
                </li>
            </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
          <Card.Img variant="top" src={cardImg2} />
                <li>
                <Link to='/'>
                
Chief AI Officer on Demand
                </Link>
                
                </li>
           
           </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
          <Card.Img variant="top" src={cardImg2} />
                <li>
                <Link to='/'>
                AI Interventions for Industry Segments and Business Functions
                </Link>
                
                </li>
         
         </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">

          <Card.Img variant="top" src={cardImg1} />
                <li>
                <Link to='/'>
               
                AI Talent Mapping Strategies
                </Link>
                
                </li>
           
           </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
           
          <Card.Img variant="top" src={cardImg2} />
                <li>
                <Link to='/'>
                
                Analytics to AI Roadmapping and Assessment
                </Link>
                
                </li>
           
           </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
           
          <Card.Img variant="top" src={cardImg2} />
                <li>
                <Link to='/'>
                
                AI Experience Center Setup Framework
                </Link>
                
                </li>
           
           </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
           
          <Card.Img variant="top" src={cardImg2} />
                <li>
                <Link to='/'>
                
                AI Strategic Partner Selection Framework
                </Link>
                
                </li>
           
           </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body">
           
          <Card.Img variant="top" src={cardImg2} />
                <li>
                <Link to='/'>
                
               AI Workshops for Business Strategy Sessions
                </Link>
                
                </li>
           
           </div>
        </div>
      </div>
    </div>
  </div>
   
      </Row> */}
       <Row>
          <h2 className="align-self-center">ARTIFACTS & FRAMEWORKS</h2>
          
            <div clasName="tutors-listing">
              <div className="row card-deck">
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg1} />
                      <li>
                        <Link to="/MasterclassEnterprises/">AI Masterclass for Enterprises</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/MasterclassesForIndustry/">
                          AI Masterclasses for Industry Segments and Business
                          Functions
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg1} />
                      <li>
                        <Link to="/CeoToolKits/">AI CoE Toolkits for Enterprises</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/CheifAiOfficerDemand/">Chief AI Officer on Demand</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/InterventionsForIndustry/">
                          AI Interventions for Industry Segments and Business
                          Functions
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg1} />
                      <li>
                        <Link to="/TalentMappingStrategy/">AI Talent Mapping Strategies</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/roadMapping/">
                          Analytics to AI Roadmapping and Assessment
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/ExperienceCenterSetup/">AI Experience Center Setup Framework</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/StrategicPartnerSection/">
                          AI Strategic Partner Selection Framework
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/WorkshopForBusiness/">
                          AI Workshops for Business Strategy Sessions
                        </Link>
                      </li>
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
