import React, { useState, useRef } from "react";
import { Button, Card, CardBody, Form, Input } from "reactstrap";

function Comments(props) {
  const [comment, setComment] = useState("");
  const fileInputRef = useRef(null);

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  let timeString;
  if (hours >= 12) {
    const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
    timeString =
      formattedHours + "." + (minutes < 10 ? "0" : "") + minutes + " pm";
  } else {
    timeString = hours + "." + (minutes < 10 ? "0" : "") + minutes + " am";
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newComment = {
      name: props.username.assigned_to,
      comment: comment,
      time: timeString,
    };
    props.addComment(newComment); // Call the addComment function passed from ActivityList
    setComment("");
  };

  const handleExportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Do something with the uploaded file
    console.log("Uploaded file:", file);
  };

  return (
    <div>
      <Form onSubmit={submitHandler} className="mt-4">
        <Input
          type="textarea"
          placeholder="Your Comments..."
          className="me-2"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
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
            <i className=""></i> Comment
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Comments;
