import React, { useState, useRef } from "react"
import { Button, Card, CardBody, Form, Input } from "reactstrap"

function Comments() {
  const currentTime = new Date()
  const [comment, setComment] = useState("")
  const fileInputRef = useRef(null)

  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  let timeString
  if (hours >= 12) {
    const formattedHours = hours % 12 || 12 // Convert hours to 12-hour format
    timeString =
      formattedHours + "." + (minutes < 10 ? "0" : "") + minutes + " pm"
  } else {
    timeString = hours + "." + (minutes < 10 ? "0" : "") + minutes + " am"
  }

  const [commentData, setCommentData] = useState([
    {
      name: "Arya Stark",
      comment: "Should I review the last 3 years legal documents as well?",
      time: timeString,
    },
  ])

  const submitHandler = e => {
    e.preventDefault()
    const commentBoxData = {
      name: "Profile Name",
      comment: comment,
      time: timeString,
    }
    setCommentData([...commentData, commentBoxData])
    setComment("")
  }
  
  const deleteHandler = index => {
    const newCommentData = [...commentData]
    newCommentData.splice(index, 1)
    setCommentData(newCommentData)
  }

  const handleExportClick = () => {
    fileInputRef.current.click()
  }

  const handleFileUpload = e => {
    const file = e.target.files[0]
    // Do something with the uploaded file
    console.log("Uploaded file:", file)
  }

  return (
    <div>
      <h5>Comments</h5>
      <Card>
        <CardBody>
          {commentData.map((item, i) => {
            return (
              <div key={i} className="mb-4">
                <div className="d-flex justify-content-between">
                  <h6 >{item.name}</h6>
                  <span>{item.time}</span>
                </div>
                <div className="d-flex  justify-content-between">
                  <div>{item.comment}</div>

                  <span className="text-danger">
                    {i !== 0 ? (
                      <i
                        className="ti-trash"
                        onClick={() => deleteHandler(i)}
                        style={{ cursor: "pointer" }}
                      ></i>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
            )
          })}
          <Form onSubmit={submitHandler} className="mt-4">
            <Input
              type="textarea"
              placeholder="Your Comments..."
              className="me-2"
              value={comment}
              onChange={e => {
                setComment(e.target.value)
              }}
              required
              style={{ height: "80px" }}
            />
            <div
              className="d-flex justify-content-between align-items-center bg-secondary"
              style={{
                height: "45px",
                borderRadius: "0.25rem",
              }}
            >
              <div>
                <i
                  className="ti-export"
                  style={{ cursor: "pointer", marginLeft: "2em" }}
                  onClick={handleExportClick}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </div>
              <Button color="success" type="submit" className="me-4">
                <i className=""></i> Submit
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Comments
