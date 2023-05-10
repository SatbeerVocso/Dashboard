import React, { useState } from "react"
import { Label, Input } from "reactstrap"
import AllFieldType from "./AllFieldType"

function ProcessesField() {
  const[FieldName,setFieldName]=useState('')
  const[FieldType,setFieldType]=useState('')
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(true)
  }
  function handleBlur() {
    setIsClicked(false)
  }
  const [showFieldType,setshowFieldType]=useState(false)

  const showhandler = ()=>{
    setshowFieldType(!showFieldType)
  }
  const inputStyle = {
    border: "none",
    borderBottom: "2px solid",
    transition: "border-bottom-color 0.1s ease",
    borderBottomColor: isClicked ? "#02a499" : "",
  }
  return (
    <div>
      <div className="d-flex justify-content-around">
      <div>
        <Label>Enter the Field Name</Label>
        <Input type="text" style={inputStyle} onClick={handleClick} onBlur={handleBlur} value={FieldName} onChange={(e)=>{
          setFieldName(e.target.value)
        }}></Input>
      </div>
      <div>
        <Label>Enter the Field Type</Label>
        <Input type="text"   value={FieldType} onChange={(e)=>{setFieldType(e.target.value)}}></Input>
      </div>
      </div>
      
      {
       showFieldType  && <AllFieldType />
      }
    </div>
  )
}

export default ProcessesField
