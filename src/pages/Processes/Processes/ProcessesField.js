import React, { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledAlert,
  Card,
  CardBody,
  Dropdown,
  UncontrolledTooltip,
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
  const [showAlert, setShowAlert] = useState(false)

  const [drp_success1, setDrp_success1] = useState(false)

  const [checked1, setChecked1] = useState(false)
  const handleChange1 = nextChecked1 => {
    setChecked1(nextChecked1)
  }
  const [checked2, setchecked2] = useState(false)
  const handleChange2 = nextChecked2 => {
    setchecked2(nextChecked2)
  }

  const handleFieldTypeClick = type => {
    setFieldType(type)
    setSelectedFieldType(type)
  }

  const fieldSubmithandler = () => {
    if (FieldName === "" || FieldType === "") {
      setShowAlert(true)
      return
    }
    setFieldSubmit(true)
  }

  const deleteComponent = () => {
    props.onDelete(props.id)
    console.log(props.id)
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
        <div>
          {FieldSubmit ? (
            <div>
              <Processfieldata
                fieldname={FieldName}
                fieldtype={FieldType}
                onchecked={checked2}
                id={props.id}
                setFieldSubmit={setFieldSubmit}
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
                      <Dropdown
                        isOpen={drp_success1}
                        toggle={() => setDrp_success1(!drp_success1)}
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-success"
                          style={{ width: "200px" }}
                        >
                          {selectedFieldType === ""
                            ? "Select the Field Type"
                            : selectedFieldType}
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
                                  onClick={() => handleFieldTypeClick("number")}
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
                      </Dropdown>
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
                          id="tooltipExample"
                          onClick={fieldSubmithandler}
                        ></i>
                        <UncontrolledTooltip
                          placement="top"
                          target="tooltipExample"
                        >
                          Save
                        </UncontrolledTooltip>
                      </div>

                      <div>
                        <i
                          className="ti-trash "
                          style={iconstyle}
                          onClick={deleteComponent}
                          id="tooltipDelete"
                        ></i>
                        <UncontrolledTooltip
                          placement="top"
                          target="tooltipDelete"
                        >
                          Delete
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default ProcessesField
