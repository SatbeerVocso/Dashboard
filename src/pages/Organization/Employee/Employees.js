import React,{useState} from "react"
import { Table } from "reactstrap"
import { EmployeeData } from "./EmployeeData"
import EmployeeModal from "./EmployeeModal"
import EmployeeMaping from "./EmployeeMaping"

function Employees() {
  const[empData, setempData]=useState(EmployeeData)
  
  const onAddempDatahandler = (formdata) =>{
   const AllEmployeedata = [...empData,formdata]
   console.log(AllEmployeedata)
   setempData(AllEmployeedata)
  }

  return (
    <div className="page-content">
       <EmployeeMaping empldata={empData}/>
      <EmployeeModal onAddData={onAddempDatahandler}/>
      
    </div>
  )
}

export default Employees
