import React, { useState } from "react"
import { Card, CardBody, Button,Input,Label } from "reactstrap"
import ProcessesField from "./ProcessesField"
import TextInput from "common/TextInput"
function ProcessesForm({ requestname }) {
  const [fields, setFields] = useState([])

  const handleAddField = () => {
    setFields([...fields, {}])
  }

  return (
    <div>
      <h5 className="mb-3">Request Name: {requestname}</h5>
      <Card style={{ width: "90%", margin: "auto" }}>
        <CardBody>
          <div>
            {fields.length > 0 &&
              fields.map((field, index) => <ProcessesField key={index} />)}
            <Button color="success" onClick={handleAddField} className="mt-4" >
              <i className="ti-plus me-1"></i> Add Field
            </Button>
          </div>
          <div >
            <Button className="bg-primary text-white mt-4 mb-4 me-2">
              Add Section
            </Button>
            <Button className="bg-primary text-white">Add Table</Button>
          </div>
          <hr/>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProcessesForm
