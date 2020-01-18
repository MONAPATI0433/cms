
import React, { Component } from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
// import image3 from '../images/bg-Whyweexist-p.png'
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
class Whyweexit extends Component {
    render() {

        return (

            <div>
                <Layout location={this.props.location}>
                    {/* <img src={image3} style={{ height: "300px", width: "100%" }} /> */}
                    <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                        <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;About Us /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp;Why We Exist</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>Why We Exist</h2>
                    <Container>
                        <p className="normal-para" style={{ fontFamily: '"Open Sans", Sans-serif', color: '#1e252f', fontWeight: '100px', fontSize: '17px' }}>In the age of the <strong>industry 4.0</strong> revolution, AI continues to dominate the technology & business landscape.  Under the aegis of<strong>transformation, disruption</strong>
                            and innovation, AI has several applications and impact areas which usher a new change in how we make decisions in the enterprise and personal spheres.
                            Traditionally, human decisions are to a large extent based on intuition, gut and historical data.  In the age of AI, several of our decisions will be taken by algorithms.
                            Leveraging AI, the ability to mimic the human brain and the ensuing ability to sense, comprehend and act will significantly go up and will result in emergence of
                        augmented intelligence in decision making.</p>
                        <p className="normal-para" style={{ fontFamily: '"Open Sans", Sans-serif', color: '#1e252f', fontWeight: '100px', fontSize: '17px' }}><strong>Enterprises, GCCs, SMBs, Startups and Government Institutions</strong> are attempting to harness the power of AI to change the way they do business.  All these
                        industry segments are looking at AI becoming the secret sauce behind making them gain a <strong>competitive advantage.</strong>  If you have not started yet, you are already
                        behind the competition, however large or pedigreed you might be</p>
                        <p className="normal-para" style={{ fontFamily: '"Open Sans", Sans-serif', color: '#1e252f', fontWeight: '100px', fontSize: '17px' }}>So, where are you placed on your<strong>AI journey?</strong>   At AIQRATE, we can guide you on your journey of understanding what AI can do for you, embedding it within your
                        business strategy, functional areas and augmenting the decision-making process.</p>
                        <p className="mt-5 normal-para" style={{ fontFamily: '"Open Sans", Sans-serif', color: '#1e252f', fontWeight: '100px', fontSize: '17px' }}>At AIQRATE, we are here to help you with the art of the possible with AI.  Through our<strong>bespoke AI strategy frameworks, methodologies and assessments,</strong>  we
                        will bring seamless<strong> Transformation, Innovation and Disruption</strong> to your businesses.  Leveraging our proven repository of consulting templates and artifacts, we will
                        curate your<strong> AI strategic approach roadmap.</strong> Our advisory offerings and consulting engagements are designed in alignment with your strategic growth, vision and
                        competitive scenarios.</p>
                        <p className="mt-5 mb-5 normal-para" style={{ fontFamily: '"Open Sans", Sans-serif', color: '#1e252f', fontWeight: '100px', fontSize: '17px' }}>We are at an inflection point where AI will revolutionize the way we do business. The paradigms of customer, products, offerings, services and competition will
                        change dramatically; and being<strong>AI-ready</strong>  will become a true differentiator.  AIQRATE will be your strategic partner to help you to prepare for what’s next in order to
                        stay relevant.</p>
                    </Container>

                </Layout>
            </div>
        )
    }
}
export default Whyweexit