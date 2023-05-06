import React from "react"
import { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { motion } from "framer-motion"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function EmployeeModalForm(props) {
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")
  const [email, setemail] = useState("")
  const [Pnumber, setPnumber] = useState("")
  const [Selecttedfile, setSelecttedfile] = useState(null)

  const [showDepartment, setShowDepartment] = useState(false)
  const [showDesignation, setShowDesignation] = useState(false)

  const [selectedCheckbox, setSelectedCheckbox] = useState("")
  const [checkboxes, setCheckboxes] = useState({
    IT: false,
    HR: false,
    Accounts: false,
  })

  const handleCheckboxChange = event => {
    const { name, value, checked } = event.target
    setCheckboxes(prevCheckboxes => ({
      ...Object.keys(prevCheckboxes).reduce((acc, key) => {
        acc[key] = key === name ? checked : false
        return acc
      }, {}),
    }))
    if (checked) {
      setSelectedCheckbox(value)
    } else {
      setSelectedCheckbox("")
    }
  }

  const [selectedDesignationcheckboxes, setselectedDesignationcheckboxes] =
    useState("")
  const [DesignationCheckboxes, setDesignationCheckboxes] = useState({
    Seniordeveloper: false,
    Juniordeveloper: false,
    Intern: false,
  })

  const handleDesignationCheckboxChange = event => {
    const { name, value, checked } = event.target
    setDesignationCheckboxes(prevCheckboxes => ({
      ...Object.keys(prevCheckboxes).reduce((acc, key) => {
        acc[key] = key === name ? checked : false
        return acc
      }, {}),
    }))
    if (checked) {
      setselectedDesignationcheckboxes(value)
    } else {
      setselectedDesignationcheckboxes("")
    }
  }

  const togglehandler = () => {
    setShowDepartment(!showDepartment)
  }
  const togglehandlerDesignation = () => {
    setShowDesignation(!showDesignation)
  }

  const FormSubmithandler = e => {
    e.preventDefault()
    let fullname = fname + " " + lname
    const formdata = {
      // userId: Math.floor(Math.random() * 100 + 10),
      name: fullname,
      profile: Selecttedfile,
      number: Pnumber,
      email: email,
      department: selectedCheckbox,
      designation: selectedDesignationcheckboxes,
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
    setSelecttedfile("")
    setCheckboxes({
      IT: false,
      HR: false,
      Accounts: false,
    })
    setDesignationCheckboxes({
      Seniordeveloper: false,
      Juniordeveloper: false,
      Intern: false,
    })
    setselectedDesignationcheckboxes("")
    setSelectedCheckbox("")
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
                }}
                required
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
                }}
                required
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
              type="email"
              style={{ width: "100%" }}
              value={email}
              onChange={e => {
                setemail(e.target.value)
              }}
              required
            />
          </div>
          <div style={{ width: "50%" }}>
            <Label for="phonenumber" className="mb-0 mt-2">
              Phone Number
            </Label>
            <Input
              type="tel"
              pattern="[0-9]{10}"
              maxlength="10"
              required
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
              onClick={togglehandler}
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
                <Label>
                  <Input
                    type="checkbox"
                    name="IT"
                    value="IT"
                    checked={checkboxes.IT}
                    onChange={handleCheckboxChange}
                  />
                  IT
                </Label>
                <Label style={{ marginLeft: "1em", marginRight: "1em" }}>
                  <Input
                    type="checkbox"
                    name="HR"
                    value="HR"
                    checked={checkboxes.HR}
                    onChange={handleCheckboxChange}
                  />
                  HR
                </Label>
                <Label>
                  <Input
                    type="checkbox"
                    name="Accounts"
                    value="Accounts"
                    checked={checkboxes.Accounts}
                    onChange={handleCheckboxChange}
                  />
                  Accounts
                </Label>
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
                <Label>
                  <Input
                    type="checkbox"
                    name="Seniordeveloper"
                    value="Senior Developer"
                    checked={DesignationCheckboxes.Seniordeveloper}
                    onChange={handleDesignationCheckboxChange}
                  />
                  Senior Developer
                </Label>
                <Label style={{ marginLeft: "1em", marginRight: "1em" }}>
                  <Input
                    type="checkbox"
                    name="Juniordeveloper"
                    value="Junior Developer"
                    checked={DesignationCheckboxes.Juniordeveloper}
                    onChange={handleDesignationCheckboxChange}
                  />
                  Junior Developer
                </Label>
                <Label>
                  <Input
                    type="checkbox"
                    name="Intern"
                    value="Intern Frontend-D"
                    checked={DesignationCheckboxes.Intern}
                    onChange={handleDesignationCheckboxChange}
                  />
                  Intern Frontend-D
                </Label>
              </div>
            </motion.div>
          )}

          <Button color="primary" className="mt-3">
            Add Data
          </Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default EmployeeModalForm
