import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap"

// Custom Scrollbar
import SimpleBar from "simplebar-react"
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

              <Col md="4">
                <div className="float-end d-none d-md-block">
                  <Dropdown isOpen={menu} toggle={toggle}>
                    <DropdownToggle
                      color="primary"
                      className="btn btn-primary dropdown-toggle waves-effect waves-light"
                    >
                      <i className="mdi mdi-cog me-2"></i> Settings
                    </DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem tag="a" href="#">
                        Action
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        Another action
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        Something else here
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">
                        Separated link
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </div>

          <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    {/* <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon1} alt="" />
                    </div> */}
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Process 1
                    </h5>
                    {/* <h4 className="fw-medium font-size-24">
                      1,685{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4> */}
                    {/* <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      {/* <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link> */}
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Progress bar(3/5)</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    {/* <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon1} alt="" />
                    </div> */}
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Process 2
                    </h5>
                    {/* <h4 className="fw-medium font-size-24">
                      1,685{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4> */}
                    {/* <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      {/* <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link> */}
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Progress bar(3/5)</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    {/* <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon1} alt="" />
                    </div> */}
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Process 3
                    </h5>
                    {/* <h4 className="fw-medium font-size-24">
                      1,685{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4> */}
                    {/* <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      {/* <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link> */}
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Progress bar(3/5)</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    {/* <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon1} alt="" />
                    </div> */}
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Process 4
                    </h5>
                    {/* <h4 className="fw-medium font-size-24">
                      1,685{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4> */}
                    {/* <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div> */}
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      {/* <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link> */}
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Progress bar(3/5)</p>
                  </div>
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

          <Button
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              fontSize: "1.5em",
              borderRadius: "50%",
              background: "#ff6239",
              color: "whitesmoke",
            }}
          >
            <i className="ti-plus"></i>
          </Button>
        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
}

export default withTranslation()(Dashboard)
