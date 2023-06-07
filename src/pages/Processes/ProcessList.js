import React, { useEffect, useState } from "react"
import { Button, Card, CardBody } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { MDBDataTable } from "mdbreact"
import { motion } from "framer-motion"

function ProcessList() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const Navigatehandler = () => {
    navigate("/processes/addprocesses")
  }
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    }

    fetch("http://localhost:1337/api/process-lists", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
        setData(result.data)
      })
      .catch(error => console.log("error", error))
  }, [])

  const ProcessListTable = {
    columns: [
      // {
      //   label:"ID",
      //   field:"id",
      //   sort:"asc",
      //   width:150
      // },
      {
        label: "Process",
        field: "process",
        sort: "asc",
        width: 150,
      },
      {
        label: "Process Label",
        field: "processlabel",
        sort: "asc",
        width: 150,
      },
    ],
    rows: data.map((item, i) => ({
      process: item.attributes.ProcessName,
      processlabel: item.attributes.ProcessDescription,
    })),
  }
  return (
    <div className="page-content" style={{ width: "90%", margin: "auto" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mt-4">
          <CardBody>
            <div className="d-flex justify-content-between">
              <h2>ProcessMessage List</h2>
              <Button
                className="ti-plus"
                color="primary"
                onClick={Navigatehandler}
              >
                Add Processes
              </Button>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <MDBDataTable responsive bordered data={ProcessListTable} />
          </CardBody>
        </Card>
      </motion.div>
    </div>
  )
}

export default ProcessList
