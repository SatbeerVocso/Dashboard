import React, { useState } from "react"
import { Card, CardBody, input, Button, Input, Label, Form } from "reactstrap"
import ProcessesForm from "./ProcessesForm"
import { motion } from "framer-motion"

function Processes() {
  const [request, setrequest] = useState("")

  const [submit, setsubmit] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  function handleClick() {
    setIsClicked(true)
  }
  function handleBlur() {
    setIsClicked(false)
  }
  const submithandler = (e) => {
    e.preventDefault()
    setsubmit(true)
  }

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid",
    transition: "border-bottom-color 0.1s ease",
    borderBottomColor: isClicked ? "#02a499" : "",
  }

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
            <Form onSubmit={submithandler}>
              <div>
                <Label>Enter the Request Name:</Label>
                <Input
                  type="text"
                  onClick={handleClick}
                  style={inputStyle}
                  onBlur={handleBlur}
                  value={request}
                  onChange={e => {
                    setrequest(e.target.value)
                  }}
                  required
                ></Input>
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
