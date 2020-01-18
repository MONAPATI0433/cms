
import React, { Component } from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import image3 from '../images/bg-BeingAI-p.jpg'
// import $ from "jquery";
// import image4 from '../images/img_avatar.png'
// import "./aiqrateteam.css"
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"


class AllianceAdvisory extends Component {
    render() {

        return (

            <div>
                <Layout location={this.props.location}>
                    <img src={image3} alt="no image" style={{ height: "300px", width: "100%" }} />
                    <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                        <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;About Us /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp; AIQRATE Alliance Advisory Forum</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}> AIQRATE Alliance Advisory Forum</h2>
                    <Container style={{marginTop:"-70px"}}>
                <Row>
                <p className="normal-para" >
                AIQRATE establishes partnerships with<strong>leading, niche, boutique, emerging AI companies and startups from around the globe</strong> to better serve our 
                clients’ needs. Through the Alliance Advisory Forum, AIQRATE offers advisory services on specialized<strong>AI capabilities, products, solutions</strong> that complement 
                your expertise and fill up your strategic and technology gaps to help achieve breakthrough results.
                </p>
                <p className="normal-para">
                The AIQRATE Alliance Advisory Forum enhances<strong>AI capabilities</strong> in five primary areas: data partnerships, tools partnerships,<strong> deep technology solutions 
                & products, client access and thought leadership.</strong> With our extensive network and connects, AIQRATE invests deeply in cultivating these partnerships, to better serve our clients with the capabilities they need to address their most critical business challenges and opportunities.
                </p>
                <p className="mb-5 normal-para">
                AIQRATE clients and prospective clients who want to learn more about the our Alliance Advisory Forum, or firms, startups interested in discussing a 
                partnership with AIQRATE, please contact us at <Link to="" style={{color:"blue"}}>consult@aiqrate.ai.</Link>
                </p>
               </Row>
                    </Container>
                </Layout>
            </div>
        )
    }
}
export default AllianceAdvisory