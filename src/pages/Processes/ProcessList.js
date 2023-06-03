import React, { useState } from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
} from "reactstrap"
import { useNavigate } from "react-router-dom"
function ProcessListPopUp() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  const Navigatehandler = () => {
    navigate("/processes/addprocesses")
  }
  const initiateRequesthandler = () => {
    navigate("/request")
  }
  return (
    <div className="page-content">
      <Card className="mt-4" style={{ width: "90%", margin: "auto" }}>
        <CardBody>
          <div className="d-flex justify-content-between">
            <h2>Currently No Items Found</h2>
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

      <Modal isOpen={isOpen} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>START A NEW REQUEST</ModalHeader>
        <ModalBody>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-success">Purchase Request</span>
              <h6>Finance Info</h6>
            </div>

            <Button color="success" onClick={initiateRequesthandler}>
              Initiate Request
            </Button>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-success">Employee Info</span>
            <Button color="success">Initiate Request</Button>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-success">Vacation Request</span>
            <Button color="success">Initiate Request</Button>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-success">Employee data Update </span>
            <Button color="success">Initiate Request</Button>
          </div>
          <hr></hr>
        </ModalBody>
      </Modal>
      <Button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          fontSize: "1.5em",
          borderRadius: "50%",
          background: "#ff6239",
          color: "whitesmoke",
        }}
        onClick={togglePopup}
      >
        <i className="ti-plus"></i>
      </Button>
    </div>
  )
}

export default ProcessListPopUp
