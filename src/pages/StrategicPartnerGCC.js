import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import img18 from "../images/bg-advisory-p.jpg"
import Partner from "../images/AI-Strategic-Partner-ecosystem-for-Enterprises.png"
export default class StrategicPartnerGCC extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img18}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <Row>
            <Col lg={6}>
              <img
                src={Partner}
                alt="bg-home-wgatwedo"
                style={{ height: "auto" }}
              />
            </Col>
            <Col lg={6}>
              <p className="normal-para mt-2">
                GCCs today are looking to accelerate their innovation and
                transformation quotient in niche areas by partnering with a
                broad spectrum of the external ecosystem. The AI revolution has
                spawned several global boutique and niche deep-tech AI startups
                across products, solutions and services categories.
              </p>
              <p className="normal-para">
                AIQRATE’s Converge framework is designed to help GCCs identify
                the pertinent capability partners to accelerate their AI
                maturity journey. AIQRATE scans and assesses multiple global
                startups and boutique firms based on its proprietary Partnership
                Scoring tool which is built on multiple measurable criteria:
                capability synergies, product, solution maturity, GTM
                approaches, client base and vision roadmaps. We also program
                manage your RFP process for AI interventions on request based on
                defined key success factors to arrive at the ideal partner
                selection.
              </p>
            </Col>
            <p className="normal-para">
              The AIQRATE Converge framework accelerates the GCCs’ inorganic
              growth strategy for partner selection and the synergistic fitment.
            </p>
          </Row>
        </Container>
      </Layout>
    )
  }
}
