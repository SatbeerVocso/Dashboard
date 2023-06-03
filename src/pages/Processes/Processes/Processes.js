import React, { useState, useEffect } from "react"
import { Card, CardBody, Button, Form, UncontrolledAlert } from "reactstrap"
import ProcessesForm from "./ProcessesForm"
import { motion } from "framer-motion"
import TextInput from "common/TextInput"

function Processes() {
  const [request, setRequest] = useState("")
  const [description, setDescription] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [submit, setSubmit] = useState(false)

  const [sections, setSections] = useState([{}])
  const [numSections, setNumSections] = useState(1)

  const handleAddSection = () => {
    setSections([...sections, {}])
    setNumSections(numSections + 1)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (request === "") {
      setShowAlert(true)
      return
    }
    const formData = {
      request,
      description,
    }

    const formId = Date.now().toString() // Generate a unique ID for the form submission
    // Save the form data to local storage
    localStorage.setItem(formId, JSON.stringify(formData))
    setSubmit(true)
    setRequest("")
    setDescription("")
  }

  useEffect(() => {
    // Retrieve the form data from local storage upon component mount
    const storedFormData = JSON.parse(localStorage.getItem("formdata"))
    if (storedFormData) {
      setRequest(storedFormData.request)
      setDescription(storedFormData.description)
    }
  }, [])

  useEffect(() => {
    // Update the local storage whenever the form data changes
    const formData = {
      request,
      description,
    }
    localStorage.setItem("formdata", JSON.stringify(formData))
    
  }, [request, description])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false)
    }, 2000) // hide the alert message after 5 seconds

    return () => {
      clearTimeout(timeoutId)
    }
  }, [showAlert])

  const iconstyle = {
    fontSize: "1.5em",
    cursor: "pointer",
    marginLeft: "1.5em",
  }
  const trashiconstyle = {
    fontSize: "1.5em",
    cursor: numSections === 1 ? "default" : "pointer",
    marginLeft: "1.5em",
  }
  return (
    <div className="mt-4">
      {submit ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {sections.map((section, index) => (
              <ProcessesForm
                key={index}
                sectionIndex={index}
                requestname={request}
              />
            ))}

            <div className="d-flex align-items-center">
              <Button className="mt-4" onClick={handleAddSection} color="dark">
                Add Section
              </Button>

              <span className="text-danger mt-4">
                <i
                  className="ti-trash "
                  style={trashiconstyle}
                  onClick={() => {
                    if (numSections > 1) {
                      setSections(sections.slice(0, -1))
                      setNumSections(numSections - 1)
                    }
                  }}
                ></i>
              </span>
            </div>
          </motion.div>
        </>
      ) : (
        <Card style={{ width: "50%", margin: "auto" }}>
          <CardBody>
            {showAlert && (
              <UncontrolledAlert color="danger" className="mb-3" role="alert">
                Please enter the request name
              </UncontrolledAlert>
            )}
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <TextInput
                  label="Enter the Request Name"
                  type="text"
                  value={request}
                  onChange={e => {
                    setRequest(e.target.value)
                  }}
                />
              </div>
              <div>
                <TextInput
                  label="Short Description for Users"
                  type="text"
                  value={description}
                  onChange={e => {
                    setDescription(e.target.value)
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
