import React,{useState} from 'react';
import { Label,Input } from 'reactstrap';

function DepartmentCheckboxes() {
   const [selectedCheckbox, setSelectedCheckbox] = useState("");

  function handleCheckboxChange(event) {
    const checkboxValue = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedCheckbox(checkboxValue);
    } else {
      setSelectedCheckbox("");
    }
  }

  function handleCrossClick() {
    setSelectedCheckbox("");
  }

  return (
    <div>
        {selectedCheckbox && (
        <p>
          {selectedCheckbox}{" "}
          <span style={{ cursor: "pointer" }} onClick={handleCrossClick}>
            &#10060;
          </span>
        </p>
      )}
      <Label>
        <Input
          type="checkbox"
          value="IT"
          checked={selectedCheckbox === "IT"}
          onChange={handleCheckboxChange}
        />
      IT
      </Label>
      <br />
      <Label>
        <Input
          type="checkbox"
          value="HR"
          checked={selectedCheckbox === "HR"}
          onChange={handleCheckboxChange}
        />
       HR
      </Label>
      <br />
      <Label>
        <Input
          type="checkbox"
          value="Accounts"
          checked={selectedCheckbox === "Accounts"}
          onChange={handleCheckboxChange}
        />
       Accounts
      </Label>
      <br />
      <Label>
        <Input
          type="checkbox"
          value="Sales"
          checked={selectedCheckbox === "Sales"}
          onChange={handleCheckboxChange}
        />
        Sales
      </Label>
      <br />
      <Label>
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
  )
  
}

export default DepartmentCheckboxes