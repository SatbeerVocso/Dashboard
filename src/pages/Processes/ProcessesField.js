import React, { useState } from "react"
import { Label, Input } from "reactstrap"
import AllFieldType from "./AllFieldType"

function ProcessesField() {
  const [FieldName, setFieldName] = useState("")
  const [FieldType, setFieldType] = useState("")
  const [isInput1Clicked, setisInput1Clicked] = useState(false)
  const [isInput2Clicked, setisInput2Clicked] = useState(false)

  function handleClick() {
    setisInput1Clicked(true)
  }
  function handleBlur() {
    setisInput1Clicked(false)
  }

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid",
    transition: "border-bottom-color 0.1s ease",
    borderBottomColor: isInput1Clicked ? "#02a499" : "",
  }

  const containerStyle = {
    display: "flex",
    width: "100%",
    alignItems:'center'
  }

  const halfWidthStyle = {
    width: "40%",
    padding: "0 5px",
    margin:'auto'
  }

  return (
    <div style={containerStyle}>
      <div style={halfWidthStyle} className="mt-2 ">
        <Label className="mb-0">Enter the Field Name</Label>
        <Input
          type="text"
          style={inputStyle }
          onClick={handleClick}
          onBlur={handleBlur}
          value={FieldName}
          onChange={e => {
            setFieldName(e.target.value)
          }}
        ></Input>
      </div>
      <div style={halfWidthStyle} className="mt-2">
        <Label className="mb-0">Enter the Field Type</Label>
        <Input
          type="text"
          style={{
            border: "none",
            borderBottom: "2px solid",
            transition: "border-bottom-color 0.1s ease",
            borderBottomColor: isInput2Clicked ? "#02a499" : "",
          }}
          value={FieldType}
          onClick={()=>{setisInput2Clicked(!isInput2Clicked)}}
          // onBlur={()=>{setisInput2Clicked(false)}}
          onChange={e => {
            setFieldType(e.target.value)
          }}
        ></Input>
      </div>
      <i className="ti-save pointer-cursor mt-4" style={{fontSize:'1.3em',cursor:'pointer'}}></i>
      {isInput2Clicked && <AllFieldType />}
    </div>
  )
}

export default ProcessesField
