import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Card,CardColumns,CardDeck, Button } from "react-bootstrap"
import img10 from "../images/bg-advisory-p.jpg"
import StrategicImg from "../images/Strategic-Interventions-for-AI@scale.jpg"
import cardImg1 from '../images/86-p.jpg'
import cardImg2 from '../images/Landing3.jpg'
import { Link } from "gatsby"
export default class Consulting extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img10}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <p className="normal-para">
            Conceptualizing AI strategy intrinsic to the enterprise requires
            that everyone understands it, everybody wants it and is bought into
            it. Although elements of AI strategy are available in the market,
            the hard work of bringing together the interplay of business
            strategy, data, processes, technologies, business performance and
            outcomes requires bespoke, artisanal approach of AI consulting that
            the classic management consulting firms cannot offer.
          </p>
          <p className="normal-para">
            AIQRATE consulting focus on seven business segments: Enterprises,
            GCCs, Startups, SMBs, VC/PE firms, Academic institutions, Public
            Sector Institutions & Business Associations and 52 best in class
            consulting offerings. We bring deep and proven strategic and
            functional AI expertise, but are known for our holistic perspective:
            we capture value across boundaries and between the silos of any
            business segment. We have proven a multiplier effect from optimizing
            the sum of the parts, not just the individual pieces. Experience our
            extensive yet bespoke AI consulting offerings:
          </p>
          <Row>
            
          {/* <CardColumns bg="light">
    

  
        <Card>
        <Card.Img varient="top" src={cardImg2} />
          <Card.Body>
            <Card.Text className="d-flex align-items-center">
            Startups
            </Card.Text>
           
          </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src={cardImg1} />
          <Card.Body>
            <Card.Text>
            Venture Capital & Private Equity Firms
            </Card.Text>
           
          </Card.Body>
        </Card>

        <Card>
        <Card.Img variant="top" src={cardImg2} />
          <Card.Body>
            <Card.Text>Small & Medium sized Businesses (SMBs)</Card.Text>
           
          </Card.Body>
        </Card>

        <Card>
        <Card.Img variant="top" src={cardImg2} />
          <Card.Body>
            <Card.Text className="d-flex align-items-center">
            Academic Institutions
            </Card.Text>
            
          </Card.Body>
        </Card>
        
      </CardColumns> */}
     <div clasName="tutors-listing">
    <div className="row card-deck">
      <div className="col-xs-12 col-md-3 card-wrapper">
        <div className="row tutor card">
          <div className="col-xs-offset-1 col-xs-4 col-md-12 card-body card-custom-styles">
              <Card.Img variant="top" src={cardImg1} className="custom-img-style" />
                <li className="cust-text-style">
                <Link to='/Enterprises/'>
                Enterprises
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
                <Link to='/GlobalCabablity/'>
                Global Capability Centres (GCCs)
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
                <Link to='/Startups/'>
                Startups
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
                <Link to='/pe-vc-firms/'>
                Venture Capital & Private Equity Firms
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
                <Link to='/small-medium/'>
                Small & Medium sized Businesses (SMBs)
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
                <Link to='/academic-institutions/'>
                Academic Institutions
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
                <Link to='/public-sector-iba/'>
                
            Public Sector Institutions & Business Associations
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
