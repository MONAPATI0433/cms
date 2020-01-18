import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap"
import cardImg1 from "../images/86-p.jpg"
import cardImg2 from "../images/Landing3.jpg"
import { Link } from "gatsby"
import img12 from "../images/bg-advisory-p.jpg"
// import profile from "../images/Update-file_AI-Masterclass-for-Enterprises.png"

export default class GlobalCabablity extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img12}
          alt=""
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <p className="normal-para">
            Global Capability Centers (GCCs) are at a critical inflection point.
            As multinational corporations continue to move to an AI-first
            paradigm, they are looking at their GCCs to provide AI prowess to
            drive this transformation.
          </p>
          <p className="normal-para">
            AI has taken a robust foothold in the GCCs, with their talent
            powering evidence-backed, data-driven decisions for their parent
            organizations. The next generation of the GCCs will be expected to
            provide autonomous decision support and an AI-augmented human
            intelligence. GCC leaders will need to harness the burgeoning power
            of AI technologies to drive corporate decisions, automate
            repetitive, low-value tasks through robotization and reinvent
            business models for the continued success of their business in the
            new world.
          </p>
          <p className="normal-para">
            The most important reason driving in-sourcing decisions is the
            strong business process integration that GCCs provide. Rather than
            relying on the volume provided by outsourced companies, MNCs realize
            that they need to meld quality output with high productivity,
            delivered by professionals that can re-imagine current business
            functions. GCCs are increasingly seeing the long-term benefits of
            investing in a world-class offshore capability center. With great
            investments come great expectations – they need their offshore GCC
            leaders to have a multidimensional business orientation and act as
            the key intermediary between the strategic boardroom and the
            operational engine room.
          </p>
          <p className="normal-para">
            The future of the GCCs is AI-first and AIQRATE, with our bespoke
            frameworks & artifacts, is best placed to dive deep with you to
            craft your AI strategy.
          </p>

          <Row>
          <h2 className="align-self-center">ARTIFACTS & FRAMEWORKS</h2>
          
            <div clasName="tutors-listing">
              <div className="row card-deck">
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg1} />
                      <li>
                        <Link to="/MasterClassForGCC/">AI Masterclass for GCCs</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/CeoToolkitForGCC">
                        AI CoE Toolkits for GCC​s
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
                        <Link to="/InterventionsForIndustryGCC/">AI Interventions for Industry Segments and Business Functions​</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/TalentMappingStrategiesGCC/">AI Talent Mapping Strategies​</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/StrategicPartnerGCC/">
                        AI Strategic Partner Selection Framework
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
                        <Link to="/StartupInnovation/ ">AI Startup Innovation Roadshows</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/ExperienceSetupGCC/">AI Experience Center Setup Framework</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/PitchesForInternalAndExternal/">Strategic AI Pitches For Internal & External Stakeholders</Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3 card-wrapper">
                  <div className="row tutor card">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
                      <Card.Img variant="top" src={cardImg2} />
                      <li>
                        <Link to="/GovernanceFrameWorkGCC/">
                        AI Governance Framework For GCCs
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
