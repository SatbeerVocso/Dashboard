import React from "react"
import { ActivityListData } from "../Dashboard/ActivityListData"
import { Card, CardBody, Badge } from "reactstrap"

function ActivityList() {
  return (
    <div>
      <Card
        className="mini-stat bg-white text-dark shadow-sm"
        style={{ height: "600px"}}
      >
        <h4 className="d-flex justify-content-center mt-2">
          PROJECT ACTIVITES
        </h4>

        <CardBody>
          {ActivityListData.map((item, index) => {
            const date = item.date.split(" ")[0]
            const month = item.date.split(" ")[1]

            return (
              <div key={index} className="mb-2 d-flex ">
                <div style={{ marginRight: "3em" }}>
                  <Badge
                    color={item.variant}
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <span
                      className="text-white font-weight-bold"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {date}
                    </span>
                  </Badge>
                  <span>{month}</span>
                </div>
                <div>
                  <h6 className="font-weight-bold mb-0">{item.title}</h6>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </CardBody>
      </Card>
    </div>
  )
}

export default ActivityList
