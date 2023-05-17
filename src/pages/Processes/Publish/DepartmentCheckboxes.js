import React, { useState } from "react"
import { Label, Input, Button } from "reactstrap"

function DepartmentCheckboxes(props) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([])

  function handleCheckboxChange(event) {
    const checkboxValue = event.target.value
    const checked = event.target.checked

    if (checked) {
      setSelectedCheckboxes(prevSelected => [...prevSelected, checkboxValue])
    } else {
      setSelectedCheckboxes(prevSelected =>
        prevSelected.filter(value => value !== checkboxValue)
      )
    }
  }

  function handleCrossClick(checkboxValue) {
    setSelectedCheckboxes(prevSelected =>
      prevSelected.filter(value => value !== checkboxValue)
    )
  }

  const labelfontsize = {
    fontSize: "1.1em",
    paddingLeft: "10px",
  }

  function handleSelectAllClick() {
    const allCheckboxValues = ["IT", "HR", "Accounts", "Sales", "Product"]
    if (
      selectedCheckboxes.length === allCheckboxValues.length &&
      allCheckboxValues.every((value) => selectedCheckboxes.includes(value))
    ) {
      setSelectedCheckboxes([]); // Deselect all checkboxes
    } else {
      setSelectedCheckboxes(allCheckboxValues); // Select all checkboxes
    }
  }

  return (
    <div>
      <div>
        <div>
          <Button onClick={handleSelectAllClick}>Select All</Button>
        </div>
        <div className="d-flex mt-2">
          <Label style={{ fontSize: "1.1em" }}>
            <Input
              type="checkbox"
              value="IT"
              checked={selectedCheckboxes.includes("IT")}
              onChange={handleCheckboxChange}
            />
            IT
          </Label>
          <br />
          <Label style={labelfontsize}>
            <Input
              type="checkbox"
              value="HR"
              checked={selectedCheckboxes.includes("HR")}
              onChange={handleCheckboxChange}
            />
            HR
          </Label>
          <br />
          <Label style={labelfontsize}>
            <Input
              type="checkbox"
              value="Accounts"
              checked={selectedCheckboxes.includes("Accounts")}
              onChange={handleCheckboxChange}
            />
            Accounts
          </Label>
          <br />
          <Label style={labelfontsize}>
            <Input
              type="checkbox"
              value="Sales"
              checked={selectedCheckboxes.includes("Sales")}
              onChange={handleCheckboxChange}
            />
            Sales
          </Label>
          <br />
          <Label style={labelfontsize}>
            <Input
              type="checkbox"
              value="Product"
              checked={selectedCheckboxes.includes("Product")}
              onChange={handleCheckboxChange}
            />
            Product
          </Label>
          <br />
        </div>
      </div>
      {selectedCheckboxes.length > 0 && (
        <div  className="mb-4 mt-3">
          {selectedCheckboxes.map(value => (
            <span
              key={value}
              className="bg-primary text-white me-2"
              style={{
                padding: "10px",
                borderRadius: "8px",
                marginRight: "4px",
              }}
            >
              {value}
              <span
                style={{ cursor: "pointer", marginLeft: "4px" }}
                onClick={() => handleCrossClick(value)}
              >
                <i
                  className="ti-close"
                  style={{ fontSize: "0.8em", fontWeight: "bold" }}
                ></i>
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default DepartmentCheckboxes
