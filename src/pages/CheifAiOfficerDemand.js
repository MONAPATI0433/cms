import React, { Component } from "react"
import Layout from "../components/layout"
import {
  Container,

} from "react-bootstrap"
import img9 from "../images/bg-advisory-p.jpg"

export default class CheifAiOfficerDemand extends Component {
  render() {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img9}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
        <p className="normal-para">
        AI today has a seat in the boardroom during strategic decisions. Real time actionable intelligence, insights and recommendations are making strategic decision making agile and data driven. The same ethic is being permeated top-down throughout the businesses.
            </p>
            <p className="normal-para mt-2">
            In order to design the entire ecosystem as well as drive the AI based decision making culture, a Chief AI Officer (CAO) is required at the helm. The CAO owns the conceptualization, design, build and execution of AI driven strategies and ensuing interventions across the enterprise.   
              </p>
              <p className="normal-para">
              AIQRATE offers a seasoned CAO on demand to design, build and execute your AI driven strategy.
            </p>

         
        </Container>
      </Layout>
    )
  }
}
