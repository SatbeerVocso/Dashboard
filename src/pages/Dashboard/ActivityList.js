import React, { useEffect, useState } from "react";
import { Card, CardBody, Badge } from "reactstrap";

function ActivityList() {
  const [activity, setActivity] = useState([]);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    fetch("http://localhost:1337/api/activity-messages", requestOptions)
      .then(response => response.json())
      .then((result) => {
        setActivity(result.data);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div>
      <Card
        className="mini-stat bg-white text-dark shadow-sm"
        style={{ height: "600px" }}
      >
        <h4 className="d-flex justify-content-center mt-4">
          PROJECT ACTIVITIES
        </h4>

        <CardBody>
          {activity.map((item, index) => {
            const date = new Date(item.attributes.date);
            const day = date.toLocaleString("en-US", { day: "numeric" });
            const month = date.toLocaleString("en-US", { month: "short" });

            return (
              <div key={index} className="mb-2 d-flex ">
                <div style={{ marginRight: "3em" }}>
                  <Badge
                    color={item.attributes.variant}
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <span
                      className="text-white font-weight-bold"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {day}
                    </span>
                  </Badge>
                  <span>{month}</span>
                </div>
                <div>
                  <h6 className="font-weight-bold mb-0">{item.attributes.username}</h6>
                  <p>{item.attributes.activity}</p>
                </div>
              </div>
            );
          })}
        </CardBody>
      </Card>
    </div>
  );
}

export default ActivityList;
