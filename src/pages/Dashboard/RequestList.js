import React, { useState, useEffect } from "react"
import { Card, CardBody } from "reactstrap"
import { RequestListData } from "./RequestListData"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function RequestList() {
  const [showData, setShowData] = useState(true)
  const [showDataUpcoming, setShowDataUpcoming] = useState(true)
  const [showDataOthers, setshowDataOthers] = useState(false)
  const [RequestList, setRequestlist] = useState([])
  const toggleShowData = () => {
    setShowData(!showData)
  }
  const toggleShowDataUpcoming = () => [setShowDataUpcoming(!showDataUpcoming)]
  const toggleShowDataOthers = () => {
    setshowDataOthers(!showDataOthers)
  }

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  }
  useEffect(() => {
    fetch(
      "http://localhost:1337/api/requestlists?populate=*&pagination[page]=1&pagination[pageSize]=25",
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
      })
      .catch(error => console.log("error", error))
  }, [])

  const iconstyle = {
    cursor: "pointer",
    marginRight: "0.2rem",
    fontSize: "1.3em",
  }

  return (
    <div>
      <Card className=" bg-white text-dark">
        <CardBody>
          <h4 className="mb-4 text-center">REQUEST LIST</h4>

          <div className="d-flex justify-content-start align-items-center mb-3">
            <i
              className={`ti-angle-${showData ? "up" : "right"}`}
              style={iconstyle}
              onClick={toggleShowData}
            ></i>
            <h5>Today({RequestListData.TodayRequestListData.length})</h5>
          </div>

          {showData &&
            RequestListData.TodayRequestListData.map((item, index) => {
              return (
                <div key={index}>
                  <Link
                    to={`/dashboard/todaylist/${item.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <motion.div
                      className="data-container"
                      initial={{ opacity: 0, y: 20 }}
                      animate={showData ? { opacity: 1, y: 0 } : {}}
                    >
                      <div className="d-flex justify-content-between ">
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
                        <div style={{ width: "45%" }}>
                          <span>{item.title}</span>
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
                  </Link>
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
            <h5>Upcoming({RequestListData.UpcomingRequestListData.length})</h5>
          </div>

          {showDataUpcoming &&
            RequestListData.UpcomingRequestListData.map((item, index) => {
              return (
                <div key={index}>
                  <Link
                    to={`/dashboard/upcominglist/${item.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <motion.div
                      className="data-container"
                      initial={{ opacity: 0, y: 20 }}
                      animate={showDataUpcoming ? { opacity: 1, y: 0 } : {}}
                    >
                      <div className="d-flex justify-content-between ">
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
                        <div style={{ width: "45%" }}>
                          <span>{item.title}</span>
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
                  </Link>
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
            <h5>Others({RequestListData.OtherRequestListData.length})</h5>
          </div>

          {showDataOthers &&
            RequestListData.OtherRequestListData.map((item, index) => {
              return (
                <div key={index}>
                  <Link
                    to={`/dashboard/otherlist/${item.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <motion.div
                      className="data-container"
                      initial={{ opacity: 0, y: 20 }}
                      animate={showDataOthers ? { opacity: 1, y: 0 } : {}}
                    >
                      <div className="d-flex justify-content-between ">
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
                        
                        <div style={{ width: "45%" }}>
                          <span>{item.title}</span>
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
                  </Link>
                </div>
              )
            })}
        </CardBody>
      </Card>
    </div>
  )
}

export default RequestList
