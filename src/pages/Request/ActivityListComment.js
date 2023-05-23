import React, { useState } from "react"
import { ActivityListCommentData } from "./ActivityListCommentData"
import { Card, CardBody, Badge } from "reactstrap"
import Comments from "./Comments"

function ActivityList(props) {
  const data = ActivityListCommentData.ActivityListData
  const commentData = ActivityListCommentData.CommentData
  const [activityListData, setActivityListData] = useState(data)
  const [comments, setComments] = useState(commentData)

  const addComment = comment => {
    const newComments = [...comments, comment]
    console.log(newComments)
    setComments(newComments)
  }
  const deletecomment = i => {
    const comment = [...comments]
    comment.splice(i, 1)
    setComments(comment)
  }
  return (
    <div>
      <Card className="mini-stat bg-white text-dark shadow-sm">
        <h4 className="d-flex justify-content-center mt-2">
          PROJECT ACTIVITIES
        </h4>
        <CardBody>
          {activityListData.map((item, index) => {
            const date = item.date.split(" ")[0]
            const month = item.date.split(" ")[1]

            return (
              <div key={index} className="mb-2 d-flex">
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

          {comments.map((item, i) => (
            <div key={i} className="mb-4">
              <div className="d-flex justify-content-between">
                <h6>{item.name}</h6>
                <span>{item.time}</span>
              </div>
              <div className="d-flex justify-content-between">
                <div>{item.comment}</div>{" "}
                {i !== 0 && (
                  <span className="text-danger" style={{ cursor: "pointer" }}>
                    <i
                      className="ti-trash"
                      onClick={() => deletecomment(i)}
                    ></i>
                  </span>
                )}
              </div>
            </div>
          ))}

          <Comments username={props.username} addComment={addComment} />
        </CardBody>
      </Card>
    </div>
  )
}

export default ActivityList
