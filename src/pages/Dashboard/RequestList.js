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
  
  return (
    <div>
      <Card
        className="mini-stat bg-white text-dark"
        style={{ height: '700px' }}
      >
        <CardBody>
          <h4 className="mb-3">REQUEST LIST</h4>
          <div className="d-flex justify-content-start align-items-center">
            <i
              className={`ti-angle-${showData ? "up" : "right"}`}
              style={{ fontSize: "1rem", cursor: "pointer",marginRight:'0.2rem' }}
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
                    <div className="d-flex mb-3">
                      <span style={{ marginRight: "2rem" }}>{item.title}</span>
                      <img
                        className="rounded-circle header-profile-user "
                        src={item.assignee_avatar}
                        alt="Header Avatar"
                      />
                      <span style={{ marginLeft: ".5rem" }}>
                        {item.assigned_to}
                      </span>

                      <div style={{ marginLeft: "2rem" }}>
                        <i className="ti-calendar"></i>
                        <span style={{ marginLeft: "0.3rem" }}>
                          {item.due_date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          <div className="d-flex justify-content-start align-items-center">
            <i
              className={`ti-angle-${showDataUpcoming ? "up" : "right"}`}
              style={{ fontSize: "1rem", cursor: "pointer" ,marginRight:'0.2rem'}}
              onClick={toggleShowDataUpcoming}
            ></i>
            <h5 className="mb-4 mt-4">
              Upcoming({UpcomingRequestListData.length})
            </h5>
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
                    <div className="d-flex mb-3">
                      <span style={{ marginRight: "2rem" }}>{item.title}</span>
                      <img
                        className="rounded-circle header-profile-user "
                        src={item.assignee_avatar}
                        alt="Header Avatar"
                      />
                      <span style={{ marginLeft: ".5rem" }}>
                        {item.assigned_to}
                      </span>

                      <div style={{ marginLeft: "2rem" }}>
                        <i className="ti-calendar"></i>
                        <span style={{ marginLeft: "0.3rem" }}>
                          {item.due_date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          <div className="d-flex justify-content-start align-items-center">
            <i
              className={`ti-angle-${showDataOthers ? "up" : "right"}`}
              style={{ fontSize: "1rem", cursor: "pointer",marginRight:'0.2rem' }}
              onClick={toggleShowDataOthers}
            ></i>
            <h5>Others({OtherRequestListData.length})</h5>
          </div>
          {showDataOthers &&
            OtherRequestListData.map((item, index) => {
              return (
                <div key={index} className="d-flex mb-3 ">
                  <motion.div
                    className="data-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={showDataOthers ? { opacity: 1, y: 0 } : {}}
                  >
                    <div className="d-flex mb-3">
                      <span style={{ marginRight: "2rem" }}>{item.title}</span>
                      <img
                        className="rounded-circle header-profile-user "
                        src={item.assignee_avatar}
                        alt="Header Avatar"
                      />
                      <span style={{ marginLeft: ".5rem" }}>
                        {item.assigned_to}
                      </span>

                      <div style={{ marginLeft: "2rem" }}>
                        <i className="ti-calendar"></i>
                        <span style={{ marginLeft: "0.3rem" }}>
                          {item.due_date}
                        </span>
                      </div>
                    </div>
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
