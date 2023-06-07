import React,{useEffect} from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody } from "reactstrap"
import { motion } from "framer-motion"
import { useState } from "react"

function Designation() {
  const [data, setdata] = useState([])
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  }
  useEffect(() => {
    fetch(
      "http://localhost:1337/api/designations?populate=*&pagination[page]=1&pagination[pageSize]=10",
      requestOptions
    )
      .then(response => {
        // console.log(response.status); // Access the status code
        return response.json()
      })
      .then(result => {
        setdata(result.data)
      })
      .catch(error => console.log("error", error))
  }, [])
  const DesignationTable = {
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
        label: "Department",
        field: "department",
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
    rows:data.map((item,i)=>({
      id: item.id,
      name: item.attributes.name,
      department: item.attributes.department.data.attributes.name,
      state: "Published",
    }))
  }
  return (
    <div className="page-content">
      <div className="container-fluid mt-4">
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <h2 className="mt-0 mb-4">Designation</h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MDBDataTable responsive bordered data={DesignationTable} />
                </motion.div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    )
}

export default Designation
