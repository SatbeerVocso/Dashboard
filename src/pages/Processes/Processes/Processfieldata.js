import React, { useState } from "react"
import { CardBody, Card,UncontrolledTooltip } from "reactstrap"
import TextInput from "common/TextInput"
import { motion } from "framer-motion"

function Processfieldata(props) {
  const [fieldTypeData, setfieldTypeData] = useState("")
  const goBack = () => {
    props.setFieldSubmit(false)
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
                        className="ti-pencil"
                        style={{ cursor: "pointer",fontSize:'1.2em' }}
                        onClick={goBack}
                        id="tooltipedit"
                      ></i>
                       <UncontrolledTooltip
                          placement="top"
                          target="tooltipedit"
                        >
                         Edit
                        </UncontrolledTooltip>
                    </div>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

export default Processfieldata
