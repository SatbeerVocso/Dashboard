import React, { useState } from "react"
import { Card, CardBody } from "reactstrap"
import {
  TodayRequestListData,
  UpcomingRequestListData,
  OtherRequestListData,
} from "./RequestListData"
import { motion } from "framer-motion"
function RequestList() {
  const [showData, setShowData] = useState(true)
  const [showDataUpcoming, setShowDataUpcoming] = useState(false)
  const [showDataOthers, setshowDataOthers] = useState(false)

  const toggleShowData = () => {
    setShowData(!showData)
  }
  const toggleShowDataUpcoming = () => [setShowDataUpcoming(!showDataUpcoming)]
  const toggleShowDataOthers = () => {
    setshowDataOthers(!showDataOthers)
  }
  const iconstyle = {
    fontSize: "1rem",
    cursor: "pointer",
    marginRight: "0.2rem",
    fontSize:'1.3em'
  }

  return (
    <div>
      <Card
        className="mini-stat bg-white text-dark"
        style={{ height: "850px" }}
      >
        <CardBody>
          <h4 className="mb-4">REQUEST LIST</h4>
          <div className="d-flex justify-content-start align-items-center mb-3">
            <i
              className={`ti-angle-${showData ? "up" : "right"}`}
              style={iconstyle}
              onClick={toggleShowData}
            ></i>
            <h5>Today({TodayRequestListData.length})</h5>
          </div>

          {showData &&
            TodayRequestListData.map((item, index) => {
              return (
                <div key={index}>
                  <motion.div
                    className="data-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={showData ? { opacity: 1, y: 0 } : {}}
                  >
                    <div className="d-flex justify-content-between ">
                      <div style={{ width: "45%" }}>
                        <span>{item.title}</span>
                      </div>

                      <div style={{ width: "20%" }}>
                        <img
                          className="rounded-circle header-profile-user "
                          src={item.assignee_avatar}
                          alt="Header Avatar"
                        />
                        <span style={{ paddingLeft: "8px" }}>
                          {item.assigned_to}
                        </span>
                      </div>

                      <div style={{ width: "20%" }}>
                        <i className="ti-calendar"></i>
                        <span style={{ paddingLeft: "5px" }}>
                          {item.due_date}
                        </span>
                      </div>

                      <div style={{ width: "15%", marginLeft: "20px" }}>
                        <span
                          className={`text-${item.variant} `}
                          style={{
                            backgroundColor:
                              item.variant === "success"
                                ? "#D1FAE5"
                                : item.variant === "danger"
                                ? "#FECACA"
                                : item.variant === "info"
                                ? "#D1E5F0"
                                : "#E0E7FF",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          {item.priority}
                        </span>
                      </div>
                    </div>
                    <hr />
                  </motion.div>
                </div>
              )
            })}

          {/* Upcoming data */}

          <div className="d-flex justify-content-start align-items-center mb-3 ">
            <i
              className={`ti-angle-${showDataUpcoming ? "up" : "right"}`}
              style={iconstyle}
              onClick={toggleShowDataUpcoming}
            ></i>
            <h5>Upcoming({UpcomingRequestListData.length})</h5>
          </div>

          {showDataUpcoming &&
            UpcomingRequestListData.map((item, index) => {
              return (
                <div key={index}>
                  <motion.div
                    className="data-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={showDataUpcoming ? { opacity: 1, y: 0 } : {}}
                  >
                    <div className="d-flex justify-content-between ">
                      <div style={{ width: "45%" }}>
                        <span>{item.title}</span>
                      </div>

                      <div style={{ width: "20%" }}>
                        <img
                          className="rounded-circle header-profile-user "
                          src={item.assignee_avatar}
                          alt="Header Avatar"
                        />
                        <span style={{ paddingLeft: "8px" }}>
                          {item.assigned_to}
                        </span>
                      </div>

                      <div style={{ width: "20%" }}>
                        <i className="ti-calendar"></i>
                        <span style={{ paddingLeft: "5px" }}>
                          {item.due_date}
                        </span>
                      </div>

                      <div style={{ width: "15%", marginLeft: "20px" }}>
                        <span
                          className={`text-${item.variant} `}
                          style={{
                            backgroundColor:
                              item.variant === "success"
                                ? "#D1FAE5"
                                : item.variant === "danger"
                                ? "#FECACA"
                                : item.variant === "info"
                                ? "#D1E5F0"
                                : "#E0E7FF",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          {item.priority}
                        </span>
                      </div>
                    </div>
                    <hr />
                  </motion.div>
                </div>
              )
            })}

          {/* otherdata */}
          <div className="d-flex justify-content-start align-items-center mb-2">
            <i
              className={`ti-angle-${showDataOthers ? "up" : "right"}`}
              style={iconstyle}
              onClick={toggleShowDataOthers}
            ></i>
            <h5>Others({OtherRequestListData.length})</h5>
          </div>

          {showDataOthers &&
            OtherRequestListData.map((item, index) => {
              return (
                <div key={index}>
                  <motion.div
                    className="data-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={showDataOthers ? { opacity: 1, y: 0 } : {}}
                  >
                    <div className="d-flex justify-content-between ">
                      <div style={{ width: "45%" }}>
                        <span>{item.title}</span>
                      </div>

                      <div style={{ width: "20%" }}>
                        <img
                          className="rounded-circle header-profile-user "
                          src={item.assignee_avatar}
                          alt="Header Avatar"
                        />
                        <span style={{ paddingLeft: "8px" }}>
                          {item.assigned_to}
                        </span>
                      </div>

                      <div style={{ width: "20%" }}>
                        <i className="ti-calendar"></i>
                        <span style={{ paddingLeft: "5px" }}>
                          {item.due_date}
                        </span>
                      </div>

                      <div style={{ width: "15%", marginLeft: "20px" }}>
                        <span
                          className={`text-${item.variant} `}
                          style={{
                            backgroundColor:
                              item.variant === "success"
                                ? "#D1FAE5"
                                : item.variant === "danger"
                                ? "#FECACA"
                                : item.variant === "info"
                                ? "#D1E5F0"
                                : "#E0E7FF",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          {item.priority}
                        </span>
                      </div>
                    </div>
                    <hr />
                  </motion.div>
                </div>
              )
            })}
        </CardBody>
      </Card>
    </div>
  )
}

export default RequestList
