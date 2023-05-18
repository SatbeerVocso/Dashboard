import React, { useState } from "react"
import { Label, Input } from "reactstrap"

function DepartmentCheckboxes(props) {
  const [selectedCheckbox, setSelectedCheckbox] = useState("")

  function handleCheckboxChange(event) {
    const checkboxValue = event.target.value
    const checked = event.target.checked
    if (checked) {
      setSelectedCheckbox(checkboxValue)
      props.checkboxvalue(checkboxValue)
    } else {
      setSelectedCheckbox("")
      props.checkboxvalue('')
    }
  }

  function handleCrossClick() {
    setSelectedCheckbox("")
    props.checkboxvalue('')
  }
  const labelfontsize = {
    fontSize: "1.1em",
    paddingLeft: '10px'
  }
  return (
    <div>
      <div className="d-flex" >
        <Label style={{fontSize:'1.1em'}}>
          <Input
            type="checkbox"
            value="IT"
            checked={selectedCheckbox === "IT"}
            onChange={handleCheckboxChange}
          />
          IT
        </Label>
        <br />
        <Label style={labelfontsize}>
          <Input
            type="checkbox"
            value="HR"
            checked={selectedCheckbox === "HR"}
            onChange={handleCheckboxChange}
          />
          HR
        </Label>
        <br />
        <Label style={labelfontsize}>
          <Input
            type="checkbox"
            value="Accounts"
            checked={selectedCheckbox === "Accounts"}
            onChange={handleCheckboxChange}
          />
          Accounts
        </Label>
        <br />
        <Label style={labelfontsize}>
          <Input
            type="checkbox"
            value="Sales"
            checked={selectedCheckbox === "Sales"}
            onChange={handleCheckboxChange}
          />
          Sales
        </Label>
        <br />
        <Label style={labelfontsize}>
          <Input
            type="checkbox"
            value="Product"
            checked={selectedCheckbox === "Product"}
            onChange={handleCheckboxChange}
          />
          Product
        </Label>
        <br />
      </div>
      {selectedCheckbox && (
        <div className="mb-3 mt-2" >
          <span
            className="bg-primary text-white"
            style={{ padding: "5px", borderRadius: "8px" }}
          >
            {selectedCheckbox}
          </span>
          <span style={{ cursor: "pointer" }} onClick={handleCrossClick}>
          <i className='ti-close' style={{marginLeft:'4px',fontSize:'1.1em',fontWeight:'bold'}}
          ></i>
          </span>
        </div>
      )}
    </div>
  )
}

export default DepartmentCheckboxes
