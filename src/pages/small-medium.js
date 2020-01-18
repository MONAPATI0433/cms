
    import React, { Component } from 'react'
    import Layout from "../components/layout"
    import { Link } from "gatsby"
    import { Container, Row,Col } from "react-bootstrap"
    import img3 from "../images/bg-advisory-p.jpg"
    import image4 from '../images/Update-file_SMB.png'

    // import Img from "gatsby-image"
    // import { useStaticQuery, graphql } from "gatsby"
    class SMALLMEDIUM extends Component {
        render() {
            return (
                <div>
                    <Layout location={this.props.location}>
                    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <img
          style={{ margin: 0 }}
          src={img3}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <div className="page-title">
          <h5 className="page-links">
            <Link to="/">Home</Link>/
            <Link>consulting</Link>Small & Medium sized Businesses (SMBs)
          </h5>
          <p className="title-text">Small & Medium sized Businesses (SMBs)</p>
        </div>

      </div>
      <Container>
                            <Row>
                              <Col md={6} className="mt-5">
                              <img src={image4} style={{width:"100%"}} />
                              </Col>
                              <Col md={6}>
                                <p className="normal-para mt-2">
                                AI adoption is not just restricted to large enterprises now, it is also an excellent lever to achieve tremendous growth for 
                                SMBs as well.
                                </p>
                                <p className="normal-para">
                                There is a belief that AI requires considerable investment. Fortunately, for SMBs on a budget, one doesn’t need to 
                                break the bank to start incorporating AI into their operations. By picking the low hanging fruits of the business and 
                                leveraging quick to deploy<strong>AI interventions,</strong>  one can efficiently harness the capabilities of AI and improve performance 
                                metrics across different business functions.
                                </p>
                                    </Col>
                                    <p className="normal-para">To be AI ready, SMBs need to strategize and align their AI initiatives with their strategic and operational business goals. </p>
                                <p className="normal-para">Through our extensive experience with SMBs, AIQRATE has a deep understanding of SMBs priorities towards revenue 
                                    enhancement, cost/bottom-line optimization and customer acquisition. AIQRATE provides consulting through<strong>bespoke 
                                    AI-led artifacts and frameworks</strong> that guide SMBs through their AI adoption journey.</p>
                                    
                            </Row>
                        </Container>
                        <div className="container">
                        <h2 className="align-self-center">VIDEOS</h2>
                            <div className="row">
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/6ao7sQ-tDm0"></iframe>
                                </Col>
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/nvNyatqs9rw"></iframe>
                                </Col>
                                <Col md={4}>
                                <iframe width="" height=""  src="//www.youtube.com/embed/MPGfNUNzxfk"></iframe>
                                </Col>
                                
                            </div>
                        </div>
                      
                    </Layout>
                </div>
            )
        }
    }
    export default SMALLMEDIUM