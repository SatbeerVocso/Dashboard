import React from "react"
import { Card, CardBody } from "reactstrap"
import { Checkmark } from "react-checkmark"
import avatarImg2 from "../../assets/images/users/avatar-2.jpg"
import avatarImg3 from "../../assets/images/users/avatar-3.jpg"
import avatarImg4 from "../../assets/images/users/avatar-4.jpg"
import avatarImg5 from "../../assets/images/users/avatar-5.jpg"
import ActivityList from "./ActivityList"
import Comments from "./Comments"
import { GrStatusUnknown } from "react-icons/gr"
import { AiOutlineUser, AiOutlinePullRequest } from "react-icons/ai"
import { MdOutlineDetails } from "react-icons/md"
import { useParams } from "react-router-dom"
import { RequestListData } from "pages/Dashboard/RequestListData"
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
  }
  const iconstyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
  const iconst = {
    fontSize: "1.4em",
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
                <div style={{ width: "45%", ...iconstyle }}>
                  <i style={iconst} className="mb-2">
                    <MdOutlineDetails />
                  </i>
                  <span>{item.title}</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    ...iconstyle,
                  }}
                >
                  <i style={iconst} className="mb-2">
                    <AiOutlinePullRequest />
                  </i>
                  <span style={{ paddingLeft: "8px" }}>Finance Request</span>
                </div>

                <div
                  style={{
                    width: "20%",
                    ...iconstyle,
                  }}
                >
                  <i style={iconst} className="mb-2">
                    <AiOutlineUser />
                  </i>
                  <span style={{ paddingLeft: "5px" }}>{item.assigned_to}</span>
                </div>

                <div
                  style={{
                    width: "15%",
                    marginLeft: "20px",
                    ...iconstyle,
                  }}
                >
                  <i style={iconst} className="mb-2">
                    <GrStatusUnknown />
                  </i>
                  <span>{item.priority}</span>
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
              <Comments username={item} />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default RequestDetail
