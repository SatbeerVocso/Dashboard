import React, { useState, useEffect } from "react"
import { Card, CardBody, Button, Form, UncontrolledAlert } from "reactstrap"
import ProcessesForm from "./ProcessesForm"
import { motion } from "framer-motion"
import TextInput from "common/TextInput"

function Processes() {
  const [request, setrequest] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [submit, setsubmit] = useState(false)

  const submithandler = e => {
    e.preventDefault()
    if (request === "") {
      setShowAlert(true)
      return
    }
    setsubmit(true)
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false)
    }, 2000) // hide the alert message after 5 seconds

    return () => {
      clearTimeout(timeoutId)
    }
  }, [showAlert])

  return (
    <div className="page-content">
      <h1>Processes Component</h1>
      {submit ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProcessesForm requestname={request} />
        </motion.div>
      ) : (
        <Card style={{ width: "50%", margin: "auto" }} className="mt-4">
          <CardBody>
            {showAlert && (
              <UncontrolledAlert color="danger" className="mb-3" role="alert">
                Please enter the request name
              </UncontrolledAlert>
            )}
            <Form onSubmit={submithandler}>
              <div>
                <TextInput
                  label="Enter the Request Name"
                  type="text"
                  value={request}
                  onChange={e => {
                    setrequest(e.target.value)
                  }}
                />
              </div>
              <Button color="success" className="mt-4" type="submit">
                Next
              </Button>
            </Form>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

export default Processes
