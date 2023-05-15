import React, { useState } from "react"
import { Card, CardBody, Button, Input, Label } from "reactstrap"
import ProcessesField from "./ProcessesField"

function ProcessesForm(props) {
  const [text, settext] = useState("")
  const [isInputClicked, setisInputClicked] = useState(false)

  const [fields, setFields] = useState([])
  const handleAddField = () => {
    setFields([...fields, { type: "processfield" }])
  }

  const [hasSeparator, setHasSeparator] = useState(false)
  // Update addSeparator function to set hasSeparator state to true
  const addSeparator = () => {
    setFields([...fields, { type: "separator" }])
    setHasSeparator(true)
  }

  return (
    <div>
      {/* <h5 className="mb-3">Request Name: {props.requestname}</h5> */}
      <Card style={{ width: "100%", margin: "auto" }}>
        <CardBody>
          <Input
            className="mb-4 mt-2"
            type="text"
            style={{
              width: "26%",
              border: "none",
              borderBottom: "2px solid",
              transition: "border-bottom-color 0.1s ease",
              borderBottomColor: isInputClicked ? "#02a499" : "",
            }}
            value={text}
            onClick={() => {
              setisInputClicked(!isInputClicked)
            }}
            onChange={e => {
              settext(e.target.value)
            }}
            placeholder="Untitled Section"
          ></Input>

          <div>
            {fields.map((field, index) => (
              <div key={index}>
                {/* Conditionally render the horizontal line if hasSeparator is true */}
                {field.type === "processfield" && <ProcessesField />}
                {field.type === "separator" && hasSeparator && (
                  <hr style={{ marginTop: "10px", marginBottom: "10px",width:'100%'}} />
                )}
              </div>
            ))}

            <Button
              color="success"
              onClick={handleAddField}
              className="mt-4  me-4"
            >
              <i className="ti-plus me-1"></i> Add Field
            </Button>
            <Button color="success" onClick={addSeparator} className="mt-4">
              <i></i> Add Seprator
            </Button>
          </div>
          <div></div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProcessesForm
