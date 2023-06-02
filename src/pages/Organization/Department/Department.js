import React, { useEffect } from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody } from "reactstrap"
import { motion } from "framer-motion"
import { useState } from "react"
function Department() {
  const [data, setdata] = useState([])
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  }

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/departments?populate=*&pagination[page]=1&pagination[pageSize]=10",
      requestOptions
    )
      .then(response => {
        // console.log(response.status); // Access the status code
        return response.json()
      })
      .then(result => {
        setdata(result.data)
        console.log(result)
      })
      .catch(error => console.log("error", error))
  }, [])
  const DepartmentTable = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
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
        label: "State",
        field: "state",
        sort: "asc",
        width: 100,
      },
    ],
    rows: data.map((item, i) => ({
      id: item.id,
      name: item.attributes.name,
      designation: item.attributes.designation.data.attributes.name,
      state: "Published",
    })),
  }
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
                  <MDBDataTable responsive bordered data={DepartmentTable}/>
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
