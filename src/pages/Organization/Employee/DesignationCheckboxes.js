import React,{useState} from 'react'
import { Label, Input } from "reactstrap"

function DesignationCheckboxes(props) {
  const [selectedCheckbox, setSelectedCheckbox] = useState("")

  function handleCheckboxChange(event) {
    const checkboxValue = event.target.value
    const checked = event.target.checked
    if (checked) {
      setSelectedCheckbox(checkboxValue)
       props.checkboxvalue(checkboxValue)
    } else {
      setSelectedCheckbox("")
      props.checkboxvalue("")
    }
  }

  function handleCrossClick() {
    setSelectedCheckbox("")
    props.checkboxvalue("")
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
          value="Senior Developer"
          checked={selectedCheckbox === "Senior Developer"}
          onChange={handleCheckboxChange}
        />
         Senior Developer
      </Label>
      <br />
      <Label style={labelfontsize}>
        <Input
          type="checkbox"
          value="Junior Developer"
          checked={selectedCheckbox === "Junior Developer"}
          onChange={handleCheckboxChange}
        />
        Junior Developer
      </Label>
      <br />
      <Label style={labelfontsize}>
        <Input
          type="checkbox"
          value="Intern Developer"
          checked={selectedCheckbox === "Intern Developer"}
          onChange={handleCheckboxChange}
        />
        Intern Developer
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

export default DesignationCheckboxes
