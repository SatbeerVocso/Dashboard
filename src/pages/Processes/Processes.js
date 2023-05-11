import React, { useState } from "react"
import { Card, CardBody, input, Button, Input, Label, Form } from "reactstrap"
import ProcessesForm from "./ProcessesForm"
import { motion } from "framer-motion"
import TextInput from "common/TextInput"

function Processes() {
  const [request, setrequest] = useState("")

  const [submit, setsubmit] = useState(false)

  const submithandler = (e) => {
    e.preventDefault()
    setsubmit(true)
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
                <TextInput 
                label='Enter the Request Name'
                type='text' 
                value={request}
                onChange={(e)=>{setrequest(e.target.value)}}
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
