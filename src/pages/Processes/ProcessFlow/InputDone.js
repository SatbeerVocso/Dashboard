import React from "react"
import { Button } from "reactstrap"
function InputDone(props) {
  const ResetHandler = () => {
    props.setSubmit(false)
  }

  return (
    <div>
      <h5 style={{ color: "#9d40ab" }}>{props.heading}</h5>
      <div style={{ textAlign: "left", fontSize: "15px" }} className="mt-3">
        <span>Who can Approve this ?</span>
      </div>
      <div
        style={{
          textAlign: "left",
          fontSize: "13px",
          backgroundColor: "#daddf5",
          paddingRight: "0.5em",
          paddingLeft: "0.5em",
        }}
        className="mt-2"
      >
        <span>{props.mail}</span>
      </div>
      <div style={{ position: "absolute", right: 20, bottom: 10 }}>
        <Button color="success" onClick={ResetHandler}>
          Change
        </Button>
      </div>
    </div>
  )
}

export default InputDone

