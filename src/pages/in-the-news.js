import React, { Component } from "react"
import Layout from "../components/layout"
import { Container, Row, Card, CardGroup } from "react-bootstrap"
import { Link } from "gatsby"
import image3 from "../images/bg-ourapproach-p.jpg"
import image4 from "../images/bg-aiqrations-p.jpg"

class Approach extends Component {
  render() {
    return (
      <div>
        <Layout location={this.props.location}>
          <img src={image3} style={{ height: "300px", width: "100%" }} alt="" />
      
          <div
            className="d-flex"
            style={{
              position: "relative",
              top: "-18.9rem",
              left: "75px",
              fontSize: "12px",
            }}
          >
            <p className="text-white ">
              <Link to="/" style={{ color: "white" }}>
                Home&nbsp;
              </Link>
              /
            </p>
            <p>
              <Link to="/About-Us" style={{ color: "white" }}>
                &nbsp;About Us /
              </Link>
            </p>
            <p>
              <Link to="/" style={{ color: "white" }}>
                &nbsp;In the News
              </Link>
            </p>
          </div>
          <h2
            className="text-white"
            style={{ position: "relative", top: "-16rem", left: "75px" }}
          >
            In the News
          </h2>
          <Container className="mb-3">
           
            <Row>
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <Card.Img variant="top" src={image4} />
                      FIRST IN ITS GENRE
                    </Card.Title>
                    <Card.Text>
                      <li>
                        <p>4th December 2019</p>
                        <p>
                          AIQRATE in NASSCOM Foundation’s Tech for Good Summit
                          2019
                        </p>
                        <p>
                          Technology has the power to disrupt status quo, alter
                          the way people live and work, rearrange value pools,
                          and lead to...
                        </p>
                      </li>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <Card.Img variant="top" src={image4} />
                      REPERTOIRE OF INSIGHTS
                    </Card.Title>
                    <Card.Text>
                      <li>
                        <p>22nd November 2019</p>
                        <p>
                          In the AI era, building the next generation of
                          consulting firm: AIQRATE advisory and consulting
                        </p>
                        <p>
                          – Published in www.xtechalpha.com on 22-November-2019
                          AI is the next frontier and some companies won’t
                          make...
                        </p>
                      </li>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <Card.Img variant="top" src={image4} />
                      REPERTOIRE OF INSIGHTS
                    </Card.Title>
                    <Card.Text>
                      <li>
                        <p>11th November 2019</p>
                        <p>
                          AIQRATE at COALESCE’19 – Goa Institute of Management
                        </p>
                        <p>
                          Goa Institute of Management (GIM), organized one of
                          its most anticipated event, the two day long Annual
                          Data Science...
                        </p>
                      </li>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>

              {/* <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <Card.Img variant="top" src={image4} />
                      END TO END COVERAGE
                    </Card.Title>
                    <Card.Text>
                      <li>
                        <p>16th February 2018</p>
                        <p>
                          WILEY Book Launch: AI and Analytics – Accelerating
                          Business Decisions By Sameer Dhanrajani
                        </p>
                        <p>
                          Introducing, the first of its kind, must have primer
                          for CxOs, executives and professionals on executing AI
                          and Analytics...
                        </p>
                      </li>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup> */}
            </Row>
          </Container>
        </Layout>
      </div>
    )
  }
}
export default Approach
