import React from "react"
import { Card, CardBody, Button } from "reactstrap"
import ActivityList from "./ActivityListComment"
import { useParams } from "react-router-dom"
import { RequestListData } from "pages/Dashboard/RequestListData"
import DataField from "./DataField"
import RequestProgressBar from "./RequestProgressBar"
import { motion, AnimatePresence } from "framer-motion"

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

  const iconstyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
  const vertical = {
    borderLeft: "2px solid #5b626b",
    height: "65px",
  }

  return (
    <div className="page-content">
      <AnimatePresence>
        <motion.div
         initial={{ y: 1000 }} // Set initial position off-screen
         animate={{ y: 0 }} // Animate to final position on-screen
         exit={{ y: 1000 }} // Animate exit off-screen
         transition={{ duration: 0.5 }} // Animation duration
        >
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
                      <span style={{ paddingLeft: "8px" }}>
                        Finance Request
                      </span>
                    </div>
                    <div style={vertical}></div>

                    <div
                      style={{
                        width: "30%",
                        ...iconstyle,
                      }}
                    >
                      <h5 className="mb-2">Iniatiting Name</h5>

                      <span style={{ paddingLeft: "5px" }}>
                        {item.assigned_to}
                      </span>
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

              <Card>
                <CardBody>
                  <h2 className="text-center mt-3 mb-2">
                    RequestList Progressbar
                  </h2>
                  <RequestProgressBar user={item} />
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
                    <Button color="danger" style={{ fontSize: "1.2em" }}>
                      Reject
                    </Button>
                    <Button color="success" style={{ fontSize: "1.2em" }}>
                      Appoval
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default RequestDetail
