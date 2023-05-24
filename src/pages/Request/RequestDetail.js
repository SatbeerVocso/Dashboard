import React from "react"
import { Card, CardBody,Button } from "reactstrap"
import { Checkmark } from "react-checkmark"
import avatarImg3 from "../../assets/images/users/avatar-3.jpg"
import avatarImg4 from "../../assets/images/users/avatar-4.jpg"
import avatarImg5 from "../../assets/images/users/avatar-5.jpg"
import ActivityList from "./ActivityListComment"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { RequestListData } from "pages/Dashboard/RequestListData"
import DataField from "./DataField"

function RequestDetail() {
  const { id, listType } = useParams()
  const requestId = parseInt(id)
  let selectedList
  if (listType === "todaylist") {
    selectedList = RequestListData.TodayRequestListData
  } else if (listType === "upcominglist") {
    selectedList = RequestListData.UpcomingRequestListData
  } else if (listType === "otherlist") {
    selectedList = RequestListData.OtherRequestListData
  }

  const item = selectedList.find(r => r.id === requestId)

  const picstyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "25%",
  }
  const iconstyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
  const vertical = {
    borderLeft: "2px solid #5b626b",
    height: "65px",
  }
  const arrowstyle = {
    display: "flex",
    alignItems: "center",
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
                <div style={{ width: "10%", ...iconstyle }}>
                  <h5 className="mb-2">#Id</h5>
                  <div>{item.id}</div>
                </div>
                <div style={vertical}></div>
                <div
                  style={{
                    width: "30%",
                    ...iconstyle,
                  }}
                >
                  <h5 className="mb-2">Type of Request</h5>
                  <span style={{ paddingLeft: "8px" }}>Finance Request</span>
                </div>
                <div style={vertical}></div>

                <div
                  style={{
                    width: "30%",
                    ...iconstyle,
                  }}
                >
                  <h5 className="mb-2">Iniatiting Name</h5>

                  <span style={{ paddingLeft: "5px" }}>{item.assigned_to}</span>
                </div>
                <div style={vertical}></div>

                <div
                  style={{
                    width: "15%",
                    marginLeft: "20px",
                    ...iconstyle,
                  }}
                >
                  <h5 className="mb-2">Priority</h5>
                  <span>{item.priority}</span>
                </div>
                <div style={vertical}></div>
                <div
                  style={{
                    width: "15%",
                    marginLeft: "20px",
                    ...iconstyle,
                  }}
                >
                  <h5 className="mb-2">Status</h5>
                  <span>In Progress</span>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="mt-">
            <h4 className="mt-3 text-center" style={{ marginLeft: "1em" }}>
              RequestList ProgressBar
            </h4>
            <CardBody>
              <div className="d-flex justify-content-between">
                <div style={picstyle}>
                  <h6>Initiated By: {item.assigned_to}</h6>
                  <div>
                    <img
                      className="avatar-sm rounded-circle mb-2"
                      src={item.assignee_avatar}
                    />
                  </div>
                  <Checkmark size="medium" />
                </div>
                <div style={arrowstyle}>
                  <AiOutlineArrowRight size={25} />
                </div>

                <div style={picstyle}>
                  <h6>Approval by: James A</h6>
                  <img
                    className="avatar-sm rounded-circle mb-2"
                    src={avatarImg3}
                  />

                  <Checkmark size="medium" />
                </div>
                <div style={arrowstyle}>
                  <AiOutlineArrowRight size={25} />
                </div>
                <div style={picstyle}>
                  <h6>Approval by: James B</h6>
                  <img
                    className="avatar-sm rounded-circle mb-2"
                    src={avatarImg4}
                  />
                </div>
                <div style={arrowstyle}>
                  <AiOutlineArrowRight size={25} />
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
            <CardBody>
              <DataField />
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "33%" }}>
          <Card className="mt-4">
            <CardBody>
              <ActivityList username={item} />
              <div className="d-flex justify-content-between">
                <Button color="danger" style={{fontSize:'1.2em'}}>Reject</Button>
                <Button color="success" style={{fontSize:'1.2em'}}>Appoval</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default RequestDetail
