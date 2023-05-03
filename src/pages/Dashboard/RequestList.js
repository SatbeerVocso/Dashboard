import React, { useState } from "react"
import { Card, CardBody } from "reactstrap"
import {
  TodayRequestListData,
  UpcomingRequestListData,
  OtherRequestListData,
} from "./RequestListData"
import {CSSTransition} from 'react-transition-group'


function RequestList() {
  const [showData, setShowData] = useState(false)

  const toggleShowData = () => {
    setShowData(!showData)
  }
  return (
    <div>
      <Card
        className="mini-stat bg-white text-dark"
        style={{ height: "600px" }}
      >
        <CardBody>
          <div className="d-flex justify-content-start align-items-center">
            <i
              className={`ti-angle-${showData ? 'up':'right'}`}
              style={{ fontSize: "1rem", cursor: "pointer" }}
              onClick={toggleShowData}
            ></i>
            <h5>Today({TodayRequestListData.length})</h5>
          </div>
          {showData && TodayRequestListData.map((item, index) => {
            return (
              <div key={index}>
                <span>{item.title}</span>
              </div>
            )
          })}
        
        </CardBody>
      </Card>
    </div>
  )
}

export default RequestList
