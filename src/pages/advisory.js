import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import "./main.css"
import {
  Container,
  Row,
  Card,
} from "react-bootstrap"
import cardImg1 from '../images/86-p.jpg'
import cardImg2 from '../images/Landing3.jpg'
import img3 from "../images/bg-advisory-p.jpg"

export default function advisory(data) {
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
          </h5>
          <p className="title-text">Advisory</p>
        </div>

      </div>
      <Container className="text-center">
        <p className="normal-para">
          AI is disrupting conventional strategic planning processes and CXO’s
          are struggling to make their enterprise AI ready and pivot their
          business and operating models. The<strong> Algorithm Economy</strong>{" "}
          and its deep transformative potential is paving way to potentially{" "}
          <strong> turn enterprises into math houses </strong> and bestowing an{" "}
          <strong> algorithm to the status of a board room member</strong> –
          making strategic decisions. At AIQRATE, we curate customized mandate
          to enable you to <strong>strategize AI planning processes</strong>
          and building blocks,{" "}
          <strong>
            dovetail AI strategy with internal business strategy
          </strong>{" "}
          and innovation/transformation charters as well as proactively
          <strong>plan AI led interventions for ROI/value creation</strong>
        </p>
        <Row>
        <div clasName="tutors-listing">
    <div className="row card-deck">
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
              <Card.Img variant="top" src={cardImg1} className="custom-img-style" />
                <li className="cust-text-style">
                <Link to='/AiSeniorLeader/'>
                AI for CXOs & Senior Leaders
                </Link>
                
                </li>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
          <Card.Img variant="top" src={cardImg2} className="custom-img-style" />
                <li className="p=0 cust-text-style">
                <Link to='/StrategicManagement/'>
                Re-imagining Strategic Management Theories & Models with AI
                </Link>
                
                </li>
            </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
          <Card.Img variant="top" src={cardImg1} className="custom-img-style" />
                <li className="cust-text-style">
                <Link to='/BuildingPowerAi/'>
                Building AI Powered Organizations
                </Link>
                
                </li>
            </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
          <Card.Img variant="top" src={cardImg2} className="custom-img-style" />
                <li className="cust-text-style">
                <Link to='/BuildingBlocs/'>
                Building Blocks for an AI Strategy
                </Link>
                
                </li>
           
           </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
          <Card.Img variant="top" src={cardImg2} className="custom-img-style" />
                <li className="cust-text-style">
                <Link to='/AiScale/'>
                AI @Scale
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
