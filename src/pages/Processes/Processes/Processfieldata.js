import React, { useState } from "react"
import { CardBody, Card, Input } from "reactstrap"
import TextInput from "common/TextInput"
import { motion } from "framer-motion"

function Processfieldata(props) {
  const [fieldTypeData, setfieldTypeData] = useState("")
  const [isVisible, setisVisible] = useState(true)
  const deletehandler = () => {
    setisVisible(false)
  }
  const [edit, setedit] = useState(false)
  const edithandler = () => {
    setedit(true)
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
            <Card>
              <CardBody>
                <div style={{ width: "60%", margin: "auto" }}>
                  {props.onchecked ? (
                    <div className="d-flex  mb-1 mt-3">
                      <div style={{ width: "100%" }}>
                        <TextInput
                          label={props.fieldname}
                          type={props.fieldtype}
                          value={fieldTypeData}
                          onChange={e => {
                            setfieldTypeData(e.target.value)
                          }}
                        />
                      </div>
                      <div>
                        <i
                          className="ti-trash"
                          onClick={deletehandler}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex mb-1 mt-3">
                      <div style={{ width: "100%" }}>
                        <TextInput
                          label={props.fieldname}
                          type={props.fieldtype}
                          value={fieldTypeData}
                          onChange={e => {
                            setfieldTypeData(e.target.value)
                          }}
                        />
                      </div>

                      <div>
                        <i
                          className="ti-pencil me-3"
                          style={{ cursor: "pointer" }}
                          onClick={edithandler}
                        ></i>
                      </div>
                      <div>
                        <i
                          className="ti-trash"
                          onClick={deletehandler}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Processfieldata