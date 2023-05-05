import React, { useState } from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  } from "reactstrap"
 import EmployeeModalForm from "./EmployeeModalForm"

function EmployeeModal(props) {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
 
  return (
    <div>
      <Button color="danger" onClick={toggle} >
        Add Employee
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}  className="bg-primary text-white">New Employee Data  </ModalHeader>
        <ModalBody>
          <EmployeeModalForm formdata={props.onAddData} onClose={toggle}/>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default EmployeeModal
