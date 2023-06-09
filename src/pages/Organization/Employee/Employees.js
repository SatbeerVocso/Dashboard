import React, { useEffect, useState } from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody } from "reactstrap"
import EmployeeModal from "./EmployeeModal"
import { motion } from "framer-motion"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { json } from "react-router-dom"

function Employees() {
  const [empData, setempData] = useState([])
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  }

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/user-profiles?populate=*&pagination[page]=1&pagination[pageSize]=100",
      requestOptions
    )
      .then(response => {
        // console.log(response.status); // Access the status code
        return response.json()
      })
      .then(result => {
        console.log(result.data)
        setempData(result.data)
      })
      .catch(error => console.log("error", error))
  }, [])
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
    rows: empData.map((item, i) => ({
      name: item.attributes.name,
      profile:
        item.attributes.profile &&
        item.attributes.profile.data &&
        item.attributes.profile.data[0].attributes &&
        item.attributes.profile.data[0].attributes.url ? (
          <img
            src={`http://localhost:1337${item.attributes.profile.data[0].attributes.url}`}
            alt="Profile"
            className="rounded-circle header-profile-user"
          />
        ) : (
          <span>No Image</span>
        ),
      number: item.attributes.mobileno,
      email: item.attributes.email,
      department:
        item.attributes.department &&
        item.attributes.department.data &&
        item.attributes.department.data.attributes
          ? item.attributes.department.data.attributes.name
          : "",
      designation:
        item.attributes.designation &&
        item.attributes.designation.data &&
        item.attributes.designation.data.attributes
          ? item.attributes.designation.data.attributes.name
          : "",
      status: (
        <div
          style={{ cursor: "pointer" }}
          onMouseEnter={e =>
            (e.currentTarget.querySelector(".ti-email").style.visibility =
              "visible")
          }
          onMouseLeave={e =>
            (e.currentTarget.querySelector(".ti-email").style.visibility =
              "hidden")
          }
        >
          <span className="me-2">{item.attributes.status}</span>
          <span
            className="ti-email"
            style={{ visibility: "hidden" }}
            onClick={() => sendemailhandler(item)}
          ></span>
        </div>
      ),
    })),
  }

  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  const sendemailhandler = item => {
    var raw = JSON.stringify({
      data: {
        Sender: "satbeer@vocso.com",
        Recipient: item.attributes.email,
        Message: "Testing Email!!!",
      },
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    fetch("http://localhost:1337/api/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result,'success'))
      .catch(error => console.log("error", error))
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid mt-4">
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <h2 className="mt-1 mb-4">Employee Data</h2>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MDBDataTable responsive bordered data={dataTableData} />
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
