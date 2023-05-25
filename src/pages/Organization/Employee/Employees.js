import React, { useEffect, useState } from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody } from "reactstrap"
import EmployeeModal from "./EmployeeModal"
import { motion } from "framer-motion"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Employees() {
  const [empData, setempData] = useState([])
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    fetch("http://localhost:1337/api/user-profiles?populate=*&pagination[page]=1&pagination[pageSize]=100", requestOptions)
      .then(response => {
        // console.log(response.status); // Access the status code
        return response.json();
      })
      .then(result => {
        setempData(result.data);
      })
      .catch(error => console.log('error', error));
  }, []);
const dataTableData = {
  columns: [
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Profile",
      field: "profile",
      sort: "asc",
      width: 270,
    },
    {
      label: "Number",
      field: "number",
      sort: "asc",
      width: 200,
    },
    {
      label: "Email",
      field: "email",
      sort: "asc",
      width: 100,
    },
    {
      label: "Department",
      field: "department",
      sort: "asc",
      width: 150,
    },
    {
      label: "Designation",
      field: "designation",
      sort: "asc",
      width: 100,
    },
    {
      label: "Status",
      field: "status",
      sort: "asc",
      width: 100,
      
    },
  ],
  rows:empData.map((item,i)=>({
    name:item.attributes.name,
    // profile:item.attributes.profile.data.attributes.url,
    number:item.attributes.mobileno,
    email:item.attributes.email,
    // department:item.attributes.department.data.attributes.name,
    // designation:item.attributes.designation.data.attributes.name,
    status:item.attributes.status
  }))
}
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
                    <MDBDataTable responsive bordered   data={dataTableData}/>
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
