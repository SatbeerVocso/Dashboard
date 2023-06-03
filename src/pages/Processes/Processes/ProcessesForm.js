import React, { useState } from "react"
import { Card, CardBody, Button, Input, Label } from "reactstrap"
import ProcessesField from "./ProcessesField"

function ProcessesForm(props) {
  const [text, settext] = useState("")
  const [isInputClicked, setisInputClicked] = useState(false)

  const [fields, setFields] = useState([])
  const [fieldCount, setFieldCount] = useState(0) // New state variable for field count

  const handleAddField = () => {
    const newField = {
      id: fieldCount + 1, // Increment fieldCount for unique ID
      type: "processfield",
    }
    setFields(prevFields => {
      const updatedfield = [...prevFields, newField]
      console.log(updatedfield)
      return updatedfield
    })
    setFieldCount(prevCount => prevCount + 1) // Increment fieldCount
  }
  const handleDeleteField = id => {
    setFields(prevFields => prevFields.filter(field => field.id !== id))
    setFieldCount(prevCount => prevCount - 1)
  }

  const [hasSeparator, setHasSeparator] = useState(false)
  // Update addSeparator function to set hasSeparator state to true
  const addSeparator = () => {
    const lastField = fields[fields.length - 1]
    console.log(lastField)
    if (lastField && lastField.type === "processfield") {
      setFields(prevFields => [...prevFields, { type: "separator" }])
      setHasSeparator(true)
    }
  }

  const RecivedDataProcessField = (fieldType, fieldName) => {
    const newField = {
      id: fieldCount + 1,
      type: fieldType,
      name: fieldName,
    }
    setFields(prevFields => [...prevFields, newField])
    setFieldCount(prevCount => prevCount + 1) // Increment fieldCount
  }

  const InitiateFormDatahandler = () => {
    const filterResult = fields.filter(f => f.id % 2 === 0);
  
    const requestData = filterResult.map(obj => ({
      data: {
        Label: obj.name,
        Heading: text,
        Type: obj.type,
      },
    }));
  console.log(requestData)
    Promise.all(
      requestData.map(data =>
        fetch("http://localhost:1337/api/createddataprocesses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(response => response.json())
      )
    )
      .then(results => {
        console.log(results, "Success!!!");
      })
      .catch(error => {
        console.log("Error:", error);
      });
  };
  
  return (
    <div style={{ marginTop: "2em" }}>
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
                {field.type === "processfield" && (
                  <ProcessesField
                    id={field.id}
                    onDelete={handleDeleteField}
                    onUpdate={RecivedDataProcessField}
                  />
                )}
                {field.type === "separator" && hasSeparator && (
                  <hr
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      width: "100%",
                    }}
                  />
                )}
              </div>
            ))}
            <div style={{ position: "absolute", right: "0" }}>
              <Button color="warning" onClick={InitiateFormDatahandler}>
                Initiate
              </Button>
            </div>
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
        </CardBody>
      </Card>
    </div>
  )
}

export default ProcessesForm
