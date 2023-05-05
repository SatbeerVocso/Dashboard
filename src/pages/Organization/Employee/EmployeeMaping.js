import React from 'react'
import { Table } from "reactstrap"

function EmployeeMaping({empldata}) {
const sortedata = empldata.sort((a,b)=>b.userId -a.userId)
  return (
    <div>
       <h5 className="mt-2">Total EmployeList ({empldata.length})</h5>
       <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            {/* <th>Profile</th> */}
            <th>EmployeeCode</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
          </tr>
        </thead>
        {sortedata.map((item, i) => {
          return (
            <tbody>
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{item.preferredFullName}</th>
                <th>{item.employeeCode}</th>
                <th>{item.phoneNumber}</th>
               <th>{item.emailAddress}</th>
               <th>{item.Department}</th>
               <th>{item.Designation}</th>
                <th>
                  <div
                    style={{
                      width: "70%",
                      backgroundColor:
                        item.variant == "success" ? " #B2EBD2" : "#FECACA",
                      padding: "4px",
                      borderRadius: "15px",
                      textAlign: "center",
                      fontSize: "11px",
                    }}
                    className={`text-${item.variant}`}
                  >
                    {item.status}
                  </div>
                </th>
              </tr>
            </tbody>
          )
        })}
      </Table>
    </div>
  )
}

export default EmployeeMaping
