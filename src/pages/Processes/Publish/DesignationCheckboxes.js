import React, { useState } from "react"
import { Label, Input, Button } from "reactstrap"

function DesignationCheckboxes(props) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([])

  function handleCheckboxChange(event) {
    const checkboxValue = event.target.value
    const checked = event.target.checked
    if (checked) {
      setSelectedCheckboxes(prevSelected => {
        const updatedSelected = [...prevSelected, checkboxValue]
        console.log("Selected Checkboxes:", updatedSelected)
        return updatedSelected
      })
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

  function handleSelectAllClick(e) {
  e.preventDefault();
  const allCheckboxValues = [
    "Senior Developer",
    "Junior Developer",
    "Intern Developer",
  ];

  // Check if all checkboxes are already selected
  if (
    selectedCheckboxes.length === allCheckboxValues.length &&
    allCheckboxValues.every((value) => selectedCheckboxes.includes(value))
  ) {
    setSelectedCheckboxes([]); // Deselect all checkboxes
  } else {
    setSelectedCheckboxes(allCheckboxValues);
     // Select all checkboxes
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
              value="Senior Developer"
              checked={selectedCheckboxes.includes("Senior Developer")}
              onChange={handleCheckboxChange}
            />
            Senior Developer
          </Label>
          <br />
          <Label style={labelfontsize}>
            <Input
              type="checkbox"
              value="Junior Developer"
              checked={selectedCheckboxes.includes("Junior Developer")}
              onChange={handleCheckboxChange}
            />
            Junior Developer
          </Label>
          <br />
          <Label style={labelfontsize}>
            <Input
              type="checkbox"
              value="Intern Developer"
              checked={selectedCheckboxes.includes("Intern Developer")}
              onChange={handleCheckboxChange}
            />
            Intern Developer
          </Label>
          <br />
        </div>
      </div>
      {selectedCheckboxes.length > 0 && (
        <div className="mb-4 mt-3">
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

export default DesignationCheckboxes
