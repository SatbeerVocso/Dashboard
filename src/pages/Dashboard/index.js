import PropTypes from "prop-types"
import React, { useState } from "react"
import { Container, Row, Col, Card, CardBody, Progress } from "reactstrap"

// Custom Scrollbar
import "chartist/dist/scss/chartist.scss"

//i18n
import { withTranslation } from "react-i18next"

//RequestlistComponent
import RequestList from "./RequestList"

//ActivityListComponent
import ActivityList from "./ActivityList"

const Dashboard = props => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
                    Welcome to WorkFlow Dashboard
                  </li>
                </ol>
              </Col>
            </Row>
          </div>

          <Row>
            <Col xl={3} md={6}>
              <Card>
                <CardBody>
                  <div className="mb-4">
                    <h5>Purchase Request</h5>
                  </div>
                  <div>
                    <Progress className="mb-4" value={50} />
                  </div>
                  <h6>Pending 3 out of 10</h6>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
            <Card>
                <CardBody>
                  <div className="mb-4">
                    <h5>Employee Info Request</h5>
                  </div>
                  <div>
                    <Progress className="mb-4" value={50} />
                  </div>
                  <h6>Pending 3 out of 10</h6>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
            <Card>
                <CardBody>
                  <div className="mb-4">
                    <h5>Vacation Request</h5>
                  </div>
                  <div>
                    <Progress className="mb-4" value={70} />
                  </div>
                  <h6>Pending 6 out of 10</h6>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
            <Card>
                <CardBody>
                  <div className="mb-4">
                    <h5>Employee data Update</h5>
                  </div>
                  <div>
                    <Progress className="mb-4" value={80} />
                  </div>
                  <h6>Pending 5 out of 10</h6>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={8} md={10}>
              <RequestList />
            </Col>
            <Col xl={4} md={10}>
              <ActivityList />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
}

export default withTranslation()(Dashboard)
