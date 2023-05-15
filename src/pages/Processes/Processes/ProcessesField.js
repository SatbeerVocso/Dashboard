import React, { useState, useEffect } from "react"
import {
  ButtonDropdown,
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledAlert,
  Card,
  CardBody,
} from "reactstrap"
import Processfieldata from "./Processfieldata"
import { motion } from "framer-motion"
import TextInput from "common/TextInput"
import Switch from "react-switch"

function ProcessesField(props) {
  const [FieldName, setFieldName] = useState("")
  const [FieldType, setFieldType] = useState("")
  const [selectedFieldType, setSelectedFieldType] = useState("")

  const [FieldSubmit, setFieldSubmit] = useState(false)
  const [isVisible, setisVisible] = useState(true)
  const [showAlert, setShowAlert] = useState(false)

  const [drp_success1, setDrp_success1] = useState(false)
  const [checked1, setChecked1] = useState(false)
  const handleChange1 = nextChecked1 => {
    console.log(nextChecked1)
    setChecked1(nextChecked1)
  }
  const [checked2, setchecked2] = useState(false)
  const handleChange2 = nextChecked2 => {
    setchecked2(nextChecked2)
    console.log(nextChecked2)
  }

  const handleFieldTypeClick = type => {
    setFieldType(type)
    setSelectedFieldType(type)
  }

  const fieldSubmithandler = () => {
    if (FieldName == "" || FieldType == "") {
      setShowAlert(true)
      return
    }
    setFieldSubmit(true)
    //this function is called on saving the data and onclick of icons save this function is called
  }

  const deletecomponet = () => {
    setisVisible(false)
    //initially component is visible but when trash icon is clicked we hide the component
  }
 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false)
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [showAlert])

  const iconstyle = {
    fontSize: "1.3em",
    cursor: "pointer",
  }
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isVisible && (
          <div>
            {FieldSubmit ? (
              <div>
                <Processfieldata
                  fieldname={FieldName}
                  fieldtype={FieldType}
                  onchecked={checked2}
                />
              </div>
            ) : (
              <div>
                {showAlert && (
                  <UncontrolledAlert
                    color="danger"
                    className="mb-2 mt-2"
                    role="alert"
                  >
                    Please Enter the field name & Select field type!
                  </UncontrolledAlert>
                )}
                <div>
                  <Card>
                    <CardBody className="d-flex justify-content-between align-items-center">
                      <div className="mt-2 " style={{ width: "35%" }}>
                        <TextInput
                          label="Enter the Field Name"
                          type="text"
                          value={FieldName}
                          onChange={e => {
                            setFieldName(e.target.value)
                          }}
                        />
                      </div>

                      <div className="btn-group mt-4">
                        <ButtonDropdown
                          isOpen={drp_success1}
                          toggle={() => setDrp_success1(!drp_success1)}
                        >
                          <Button
                            id="caret"
                            color="success"
                            style={{ width: "200px" }}
                          >
                            {selectedFieldType === ""
                              ? "Select the Field Type"
                              : selectedFieldType}
                          </Button>
                          <DropdownToggle
                            caret
                            color="success"
                            className="dropdown-toggle-split"
                          >
                            <i className="mdi mdi-chevron-down" />
                          </DropdownToggle>
                          <DropdownMenu>
                            <div className="d-flex ">
                              <div>
                                <DropdownItem>
                                  <div
                                    onClick={() => handleFieldTypeClick("text")}
                                  >
                                    <i className="ti-text "></i>
                                    <span>Text</span>
                                  </div>
                                </DropdownItem>
                                <DropdownItem>
                                  <div
                                    onClick={() =>
                                      handleFieldTypeClick("number")
                                    }
                                    className="mt-1 mb-1"
                                  >
                                    <i className="ti-money"></i>
                                    <span>Currency</span>
                                  </div>
                                </DropdownItem>
                                <DropdownItem>
                                  <div
                                    onClick={() => handleFieldTypeClick("file")}
                                  >
                                    <i className="ti-files ">
                                      <span>File</span>
                                    </i>
                                  </div>
                                </DropdownItem>
                              </div>

                              <div>
                                <DropdownItem>
                                  <div
                                    onClick={() => handleFieldTypeClick("date")}
                                  >
                                    <i className="ti-calendar">
                                      <span>Date</span>
                                    </i>
                                  </div>
                                </DropdownItem>
                                <DropdownItem>
                                  <div
                                    onClick={() => handleFieldTypeClick("time")}
                                    className="mt-1 mb-1"
                                  >
                                    <i className="ti-world">
                                      <span>Time</span>
                                    </i>
                                  </div>
                                </DropdownItem>
                                <DropdownItem>
                                  <div
                                    onClick={() =>
                                      handleFieldTypeClick("textarea")
                                    }
                                  >
                                    <i className="ti-text">
                                      <span>Text-area</span>
                                    </i>
                                  </div>
                                </DropdownItem>
                              </div>
                            </div>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>

                      <div>
                        <p>Is this Mandatory ?</p>
                        <Switch
                          onChange={handleChange1}
                          checked={checked1}
                          className="react-switch"
                          height={15}
                          width={40}
                        />
                      </div>

                      <div>
                        <p>Is this Radonly ?</p>
                        <Switch
                          onChange={handleChange2}
                          checked={checked2}
                          height={15}
                          width={40}
                        />
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <div>
                          <i
                            className="ti-save me-4"
                            style={iconstyle}
                            onClick={fieldSubmithandler}
                          ></i>
                        </div>

                        <div>
                          <i
                            className="ti-trash "
                            style={iconstyle}
                            onClick={deletecomponet}
                          ></i>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default ProcessesField
