import React, { useState } from "react"
import { Label, Input, UncontrolledAlert } from "reactstrap"
import AllFieldType from "./AllFieldType"
import Processfieldata from "./Processfieldata"
import { motion } from "framer-motion"
import TextInput from "common/TextInput"

function ProcessesField(props) {
  const [FieldName, setFieldName] = useState("")
  const [FieldType, setFieldType] = useState("")
  
  const [isInput2Clicked, setisInput2Clicked] = useState(false)
  const [FieldSubmit, setFieldSubmit] = useState(false)
  const [isVisible, setisVisible] = useState(true)

  const handleFieldTypeSelected = fieldType => {
    setFieldType(fieldType)
    setisInput2Clicked(false)
    //this function is created for to get data from allfieldtype component  and setthe value into setfiedtype
  }
  const fieldSubmithandler = () => {
    // console.log(FieldName, FieldType)
    setFieldSubmit(true)
    //this function is called on saving the data and onclick of icons save this function is called
  }
  const deletecomponet = () => {
    setisVisible(false)
    //initially component is visible but when trash icon is clicked we hide the component
  }
 
  const containerStyle = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    position: "relative",
  }

  const halfWidthStyle = {
    width: "40%",
    padding: "0 5px",
    margin: "auto",
  }
  const iconstyle = {
    fontSize: "1.3em",
    cursor: "pointer",
  }
  return (
    <div>
      {isVisible && (
        <div>
          {FieldSubmit ? (
            <div>
              <Processfieldata fieldname={FieldName} fieldtype={FieldType} />
            </div>
          ) : (
            <div style={containerStyle}>
              <div style={halfWidthStyle} className="mt-2 ">
                <TextInput 
                  label='Enter the Field Name'
                  type='text'
                  value={FieldName}
                  onChange={e => {
                    setFieldName(e.target.value)
                  }}
                  />
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
                  onClick={() => {
                    setisInput2Clicked(!isInput2Clicked)
                  }}
                  // onBlur={()=>{setisInput2Clicked(false)}}
                  onChange={e => {
                    setFieldType(e.target.value)
                  }}
                ></Input>
              </div>
              <i
                className="ti-save pointer-cursor mt-4 me-2"
                style={iconstyle}
                onClick={fieldSubmithandler}
              ></i>
              <i
                className="ti-trash mt-4"
                style={iconstyle}
                onClick={deletecomponet}
              ></i>
              {isInput2Clicked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "105%", // position below input
                      right: "16%",
                      width: "30%",
                    }}
                  >
                    <AllFieldType data={handleFieldTypeSelected} />
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProcessesField
