import React from "react"
import { Card, CardBody } from "reactstrap"
import { Checkmark } from "react-checkmark"
import avatarImg2 from "../../assets/images/users/avatar-2.jpg"
import avatarImg3 from "../../assets/images/users/avatar-3.jpg"
import avatarImg4 from "../../assets/images/users/avatar-4.jpg"
import avatarImg5 from "../../assets/images/users/avatar-5.jpg"
import ActivityList from "./ActivityList"
import Comments from "./Comments"

function RequestDetail() {
  const picstyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }
  return (
    <div className="page-content">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "63%" }}>
          <Card className="mt-4">
            <CardBody>
              <div className="d-flex justify-content-between ">
                <div style={{ width: "45%" }}>
                  <span>Draft the new contract document for sales team</span>
                </div>

                <div style={{ width: "20%" }}>
                  <span style={{ paddingLeft: "8px" }}>Finance Request</span>
                </div>

                <div style={{ width: "20%" }}>
                  <span style={{ paddingLeft: "5px" }}>Arya Stark</span>
                </div>

                <div style={{ width: "15%", marginLeft: "20px" }}>
                  <span className="text-danger">High</span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-">
            <h4 className="mt-2" style={{marginLeft:'1em'}}>RequestList ProgressBar</h4>
            <CardBody>
              <div className="d-flex justify-content-between">
                <div style={picstyle}>
                  <h6>Initiated By: Arya Stark</h6>
                  <div>
                    <img
                      className="avatar-sm rounded-circle mb-2"
                      src={avatarImg2}
                    />
                  </div>

                  <Checkmark size="medium" />
                </div>

                <div style={picstyle}>
                  <h6>Approval by: James A</h6>
                  <img
                    className="avatar-sm rounded-circle mb-2"
                    src={avatarImg3}
                  />

                  <Checkmark size="medium" />
                </div>
                <div style={picstyle}>
                  <h6>Approval by: James B</h6>
                  <img
                    className="avatar-sm rounded-circle mb-2"
                    src={avatarImg4}
                  />
                </div>
                <div style={picstyle}>
                  <h6>Approval by: James C</h6>
                  <img
                    className="avatar-sm rounded-circle mb-2"
                    src={avatarImg5}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody></CardBody>
          </Card>
        </div>
        <div style={{ width: "33%" }}>
          <Card className="mt-4">
            <CardBody>
              <ActivityList />
              <Comments />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default RequestDetail
