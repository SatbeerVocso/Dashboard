import React, { useEffect } from "react"
import { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { motion } from "framer-motion"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import DepartmentCheckboxes from "./DepartmentCheckboxes"
import DesignationCheckboxes from "./DesignationCheckboxes"

function EmployeeModalForm(props) {
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")

  const [email, setemail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false)
  const handleEmailBlur = (event) => {
    if (!event.target.value.includes("@")) {
      setIsEmailValid(false);
      toast.error("Email address should contain '@'");
    }
  };

  const [Pnumber, setPnumber] = useState("")
  const [Selecttedfile, setSelecttedfile] = useState(null)

  const [showDepartment, setShowDepartment] = useState(false)
  const [showDesignation, setShowDesignation] = useState(false)

  const [isFormValid, setIsFormValid] = useState(false)
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "lightgrey",
  })

  const togglehandlerDepartment = () => {
    setShowDepartment(!showDepartment)
  }
  const togglehandlerDesignation = () => {
    setShowDesignation(!showDesignation)
  }
  useEffect(() => {
    if ((fname, lname, email, Pnumber)) {
      setIsFormValid(true)
      setButtonStyle({ backgroundColor: "blue", color: "white" })
    } else {
      setIsFormValid(false)
      setButtonStyle({ backgroundColor: "lightgrey" })
    }
  })
  const FormSubmithandler = e => {
    e.preventDefault()
    let fullname = fname + " " + lname

    const formdata = {
      // userId: Math.floor(Math.random() * 100 + 10),
      name: fullname,
      profile: Selecttedfile,
      number: Pnumber,
      email: email,
      Status: "Active",
    }
    console.log(formdata)
    toast.success("Data Submitted Successfuly ", {
      position: toast.POSITION.TOP_RIGHT,
    })
    setfname("")
    setlname("")
    setemail("")
    setPnumber("")
    setIsFormValid(false) // disable the button after submission
    props.onClose()
  }

  const iconstyle = {
    cursor: "pointer",
    marginRight: "0.2rem",
    fontSize: "1.3em",
  }
  const labelfontsize = {
    fontSize: "1.2em",
  }
  return (
    <div>
      <ToastContainer />
      <Form onSubmit={FormSubmithandler}>
        <FormGroup>
          <div className="d-flex">
            <div style={{ flexBasis: "50%" }}>
              <Label for="firstname" className="mb-0">
                FirstName
              </Label>
              <Input
                id="fname"
                name="fname"
                placeholder="Enter a FirstName"
                type="text"
                value={fname}
                onChange={e => {
                  setfname(e.target.value)
                  setShowMessage(false)
                }}
              />
            </div>

            <div style={{ flexBasis: "50%" }}>
              <Label for="lastname" className="mb-0">
                LastName
              </Label>
              <Input
                id="lname"
                name="lname"
                placeholder="Enter a LastName"
                type="text"
                value={lname}
                onChange={e => {
                  setlname(e.target.value)
                  setShowMessage(false)
                }}
              />
            </div>
          </div>
          <div>
            <Label for="Email" className="mt-2 mb-0">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter a Email"
              type="text"
              style={{ width: "100%" }}
              value={email}
              onBlur={handleEmailBlur}
              onChange={e => {
                setemail(e.target.value)
                if (e.target.value.includes("@")) {
                  setIsEmailValid(true)
                } else {
                  setIsEmailValid(false);
                }
              }}
            />
          </div>
          <div style={{ width: "50%" }}>
            <Label for="phonenumber" className="mb-0 mt-2">
              Phone Number
            </Label>
            <Input
              type="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              value={Pnumber}
              onChange={e => {
                setPnumber(e.target.value)
              }}
            />
          </div>

          <div style={{ width: "50%" }}>
            <Label className="mt-2 mb-0">Upload Photo</Label>
            <Input
              type="file"
              name="file"
              onChange={event => {
                let file = event.target.files[0]
                if (file.size > 100000) {
                  alert("Please Select file less than 100kb")
                  return
                } else {
                  setSelecttedfile(file)
                }
              }}
            />
          </div>

          <div className="d-flex justify-content-start align-items-center mt-2">
            <i
              className={`ti-angle-${showDepartment ? "up" : "right"}`}
              style={iconstyle}
              onClick={togglehandlerDepartment}
            ></i>
            <h5 className="mt-2 ">Select Departments</h5>
          </div>
          {showDepartment && (
            <motion.div
              className="data-container"
              initial={{ opacity: 0, y: 20 }}
              animate={showDepartment ? { opacity: 1, y: 0 } : {}}
            >
              <div style={{ marginLeft: "1em" }}>
                <DepartmentCheckboxes />
              </div>
            </motion.div>
          )}

          <div className="d-flex justify-content-start align-items-center mt-2 ">
            <i
              className={`ti-angle-${showDesignation ? "up" : "right"}`}
              style={iconstyle}
              onClick={togglehandlerDesignation}
            ></i>
            <h5 className="mt-2 ">Select Designations</h5>
          </div>
          {showDesignation && (
            <motion.div
              className="data-container"
              initial={{ opacity: 0, y: 20 }}
              animate={showDesignation ? { opacity: 1, y: 0 } : {}}
            >
              <div style={{ marginLeft: "1em" }}>
                <DesignationCheckboxes />
              </div>
            </motion.div>
          )}

          <Button
            style={buttonStyle}
            className="mt-4"
            type="submit"
            disabled={!isFormValid}
          >
            Save
          </Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default EmployeeModalForm
