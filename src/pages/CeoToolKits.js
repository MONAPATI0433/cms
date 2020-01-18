import React, { Component } from "react"
import Layout from "../components/layout"
import {
  Container,
  Row,
  Col,
} from "react-bootstrap"
import img8 from "../images/bg-advisory-p.jpg"

import ToolKit from "../images/ceo-toolkit.png"
export default class CeoToolKits extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img8}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <Row>
            <Col lg={6}>
              <img
                src={ToolKit}
                alt="bg-home-wgatwedo"
                style={{ height: "auto" }}
              />
            </Col>
            <Col lg={6}>
              <p className="normal-para mt-2">
                AI Centre of Excellence within enterprises are evolving from
                being cost killers to value drivers. AI CoEs are set up not just
                for cost arbitrage but go all the way to tap into right talent
                and nurture in-house innovation. Business impact is being
                generated through AI driven process innovation and revealing new
                sources of revenue for stakeholders.
              </p>
            </Col>
            <p className="normal-para">
              AIQRATE’s Paragon framework guides an enterprise through the
              journey of the setup of an AI CoE, its continuous evolution as
              well as the demonstrable value creation for the business.
            </p>
          </Row>
         
        </Container>
      </Layout>
    )
  }
}
