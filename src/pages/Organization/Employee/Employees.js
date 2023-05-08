// import React, { useEffect, useState } from "react"
// import { EmployeeData } from "./EmployeeData"
// import EmployeeModal from "./EmployeeModal"
// import EmployeeMaping from "./EmployeeMaping"
// import { motion } from "framer-motion"

// function Employees() {
//   const [empData, setempData] = useState(EmployeeData)
//   const [loading, setloading] = useState(false)

//   const onAddempDatahandler = formdata => {
//     const AllEmployeedata = [...empData, formdata]
//     setempData(AllEmployeedata)
//   }

//   return (
//     <div className="page-content">
//       {loading ? (
//         <h1>Loading Data....</h1>
//       ) : (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <EmployeeMaping empldata={empData} />
//         </motion.div>
//       )}

//       <EmployeeModal onAddData={onAddempDatahandler} />
//     </div>
//   )
// }

// export default Employees

import React, { useState } from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody } from "reactstrap"
import { EmployeeData } from "./EmployeeData"
import EmployeeModal from "./EmployeeModal"
import { motion } from "framer-motion"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Employees() {
  const [empData, setempData] = useState(EmployeeData)

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <h2 className="mt-1 mb-1">Employee Data</h2>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MDBDataTable responsive bordered data={empData} />
                  </motion.div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <EmployeeModal />
          <ToastContainer />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Employees
