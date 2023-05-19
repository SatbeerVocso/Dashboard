import React from "react"
import { Card, CardBody } from "reactstrap"
import { Checkmark } from "react-checkmark"
import avatarImg2 from "../../assets/images/users/avatar-2.jpg"
import avatarImg3 from "../../assets/images/users/avatar-3.jpg"
import avatarImg4 from "../../assets/images/users/avatar-4.jpg"
import avatarImg5 from "../../assets/images/users/avatar-5.jpg"
import avatarImg6 from "../../assets/images/users/avatar-6.jpg"
import ActivityList from "./ActivityList"
import Comments from "./Comments"

function Request() {
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
                  <span>High</span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-">
            <CardBody className="d-flex justify-content-around">
              <div>
                <div>
                  <img
                    className="avatar-sm rounded-circle mb-2"
                    src={avatarImg2}
                  />
                </div>
                <div>
                  <Checkmark size="medium" />
                </div>
              </div>
              <div>
                <img
                  className="avatar-sm rounded-circle mb-2"
                  src={avatarImg3}
                />
                <Checkmark size="medium" />
              </div>
              <div>
                <img
                  className="avatar-sm rounded-circle mb-2"
                  src={avatarImg4}
                />
              </div>
              <div>
                <img
                  className="avatar-sm rounded-circle mb-2"
                  src={avatarImg5}
                />
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

export default Request
