import React, { useState } from "react";
import { Label, Input } from "reactstrap";

function DepartmentCheckboxes(props) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  function handleCheckboxChange(event) {
    const checkboxValue = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedCheckboxes(prevSelected => [...prevSelected, checkboxValue]);
    } else {
      setSelectedCheckboxes(prevSelected =>
        prevSelected.filter(value => value !== checkboxValue)
      );
    }
  }

  function handleCrossClick(checkboxValue) {
    setSelectedCheckboxes(prevSelected =>
      prevSelected.filter(value => value !== checkboxValue)
    );
  }

  const labelfontsize = {
    fontSize: "1.1em",
    paddingLeft: "10px"
  };

  return (
    <div>
      <div className="d-flex">
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
      {selectedCheckboxes.length > 0 && (
        <div className="mb-3 mt-2">
          {selectedCheckboxes.map(value => (
            <span
              key={value}
              className="bg-primary text-white"
              style={{ padding: "10px", borderRadius: "8px", marginRight: "4px" }}
            >
              {value}
              <span
                style={{ cursor: "pointer", marginLeft: "4px" }}
                onClick={() => handleCrossClick(value)}
              >
                <i className="ti-close" style={{ fontSize: "1.1em", fontWeight: "bold" }}></i>
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default DepartmentCheckboxes;
