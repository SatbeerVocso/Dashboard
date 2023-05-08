import React from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody } from "reactstrap"
import { motion } from "framer-motion"
import { DepartmentData } from "./DepartmentData"
import { useState } from "react"

function Department() {
  const[data,setdata]=useState(DepartmentData)
  return (
    <div className="page-content">
      <div className="container-fluid">
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <h2 className="mt-0 mb-3">Department</h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MDBDataTable responsive bordered data={data} />
                </motion.div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Department
