import React, { useState } from "react"
import {
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ButtonDropdown,
  Form,
} from "reactstrap"
import { motion } from "framer-motion"
import DesignationCheckboxes from "./DesignationCheckboxes"
import DepartmentCheckboxes from "./DepartmentCheckboxes"

function Publish() {
  const [showDepartment, setShowDepartment] = useState(false)
  const [showDesignation, setShowDesignation] = useState(false)
  const [info_dropup1, setInfo_dropup1] = useState(false);

  const togglehandlerDepartment = () => {
    setShowDepartment(!showDepartment)
  }
  const togglehandlerDesignation = () => {
    setShowDesignation(!showDesignation)
  }
 
  const iconstyle = {
    cursor: "pointer",
    marginRight: "0.2rem",
    fontSize: "1.3em",
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card style={{ width: "50%", margin: "auto" }}>
          <CardBody>
            <Form>
              <div className="d-flex justify-content-start align-items-center mt-2">
                <i
                  className={`ti-angle-${showDepartment ? "up" : "right"}`}
                  style={iconstyle}
                  onClick={togglehandlerDepartment}
                ></i>
                <h5 className="mt-2 ">Select Departments</h5>
              </div>
              {showDepartment && (
                <motion.div
                  className="data-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={showDepartment ? { opacity: 1, y: 0 } : {}}
                >
                  <div style={{ marginLeft: "1em" }}>
                    <DepartmentCheckboxes />
                  </div>
                </motion.div>
              )}
              <div className="d-flex justify-content-start align-items-center mt-2 ">
                <i
                  className={`ti-angle-${showDesignation ? "up" : "right"}`}
                  style={iconstyle}
                  onClick={togglehandlerDesignation}
                ></i>
                <h5 className="mt-2 ">Select Designations</h5>
              </div>
              {showDesignation && (
                <motion.div
                  className="data-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={showDesignation ? { opacity: 1, y: 0 } : {}}
                >
                  <div style={{ marginLeft: "1em" }}>
                    <DesignationCheckboxes />
                  </div>
                </motion.div>
              )}

              <div className="d-flex gap-2 flex-wrap mt-3">
                <Dropdown
                  isOpen={info_dropup1}
                  direction="right"
                  toggle={() => setInfo_dropup1(!info_dropup1)}
                >
                  <DropdownToggle className="btn btn-info" caret>
                    Priority <i className="mdi mdi-chevron-right" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

               
              </div>

              <div>
                <Button color="success" className="mt-4" type="submit">
                  Publish
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  )
}

export default Publish
