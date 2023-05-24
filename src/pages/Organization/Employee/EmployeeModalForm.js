import React, { useEffect } from "react"
import { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { motion } from "framer-motion"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import DepartmentCheckboxes from "./DepartmentCheckboxes"
import DesignationCheckboxes from "./DesignationCheckboxes"
import axios from "axios"

function EmployeeModalForm(props) {
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")

  const [email, setemail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false)

  const [Pnumber, setPnumber] = useState("")
  const [Selecttedfile, setSelecttedfile] = useState(null)

  const [showDepartment, setShowDepartment] = useState(false)
  const [showDesignation, setShowDesignation] = useState(false)

  const [checkboxDataDesignation, setCheckboxDataDesignation] = useState("")
  const checkboxDatafunctionDesignation = checkboxvaluefromdesignation => {
    setCheckboxDataDesignation(checkboxvaluefromdesignation)
  }
  const [checkboxDataDepartment, setcheckboxDataDepartment] = useState("")
  const checkboxDatafunctionDepartment = checkboxDataDepartment => {
    setcheckboxDataDepartment(checkboxDataDepartment)
  }

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
    if (
      fname &&
      isEmailValid &&
      lname &&
      Pnumber &&
      Selecttedfile &&
      checkboxDataDepartment &&
      checkboxDataDesignation
    ) {
      setIsFormValid(true)
      setButtonStyle({ backgroundColor: "#02A499", color: "white" })
    } else {
      setIsFormValid(false)
      setButtonStyle({ backgroundColor: "lightgrey" })
    }
  }, [
    fname,
    lname,
    isEmailValid,
    Pnumber,
    Selecttedfile,
    checkboxDataDepartment,
    checkboxDataDesignation,
  ])

  const FormSubmithandler = async e => {
    e.preventDefault()
    let fullname = fname + " " + lname
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      data: {
        name: fullname,
        email: email,
        mobileno: Pnumber,
        status: "Active",
        // department: checkboxDataDepartment,
        // designation: checkboxDataDesignation,
      },
    })
    const requestOptions = {
      headers: myHeaders,
      method: "POST",
      body: raw,
      redirect: "follow",
    }
    fetch(
      "http://localhost:1337/api/user-profiles?populate=*&pagination[page]=1&pagination[pageSize]=10",
      requestOptions
    )
      .then(response => {
        console.log(response.status) // Access the status code
        return response.json()
      })
      .then(result => {
        console.log(result)
        toast.success("Data Submitted Successfully ", {
          position: toast.POSITION.TOP_RIGHT,
        })

        // Reset form fields and state
        setfname("")
        setlname("")
        setemail("")
        setPnumber("")
        setCheckboxDataDesignation("")
        setcheckboxDataDepartment("")
        setIsFormValid(false)
        props.onClose()
      })
      .catch(error => {
        console.log("error", error)
        toast.error("Failed to submit data", {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
  }

  // const FormSubmithandler = e => {
  //   e.preventDefault()
  //   let fullname = fname + " " + lname
  //   const formdata = {
  //     name: fullname,
  //     email: email,
  //     mobileno: Pnumber,
  //     status: "Active",
  //     department: checkboxDataDepartment,
  //     designation: checkboxDataDesignation,
  //   }
  //   console.log(formdata)
  //   toast.success("Data Submitted Successfully ", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   })

  //   // Reset form fields and state
  //   setfname("")
  //   setlname("")
  //   setemail("")
  //   setPnumber("")
  //   setCheckboxDataDesignation("")
  //   setcheckboxDataDepartment("")
  //   setIsFormValid(false)
  //   props.onClose()
  // }

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
              type="text"
              style={{ width: "100%" }}
              value={email}
              onBlur={e => {
                if (!e.target.value.includes("@")) {
                  setIsEmailValid(false)
                  toast.error("Email address should contain '@'")
                }
              }}
              onChange={e => {
                setemail(e.target.value)
                if (e.target.value.includes("@")) {
                  setIsEmailValid(true)
                } else {
                  setIsEmailValid(false)
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
                <DepartmentCheckboxes
                  checkboxvalue={checkboxDatafunctionDepartment}
                />
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
                <DesignationCheckboxes
                  checkboxvalue={checkboxDatafunctionDesignation}
                />
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
