import React from "react"
import { Table } from "reactstrap"
import { EmployeeData } from "./EmployeeData"

function Employees() {
  return (
    <div className="page-content">
      <h5 className="mt-2">Total EmployeList ({EmployeeData.length})</h5>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Profile</th>
            <th>EmployeeCode</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        {EmployeeData.map((item, i) => {
          return (
            <tbody>
              <tr key={i}>
                <th>{i+1}</th>
                <th>{item.preferredFullName}</th>
                <th>
                  {" "}
                  <img
                    src={item.userpic}
                    alt={item.firstName}
                    className="rounded-circle header-profile-user"
                  />
                </th>
                <th>{item.employeeCode}</th>
                <th>{item.phoneNumber}</th>
                <th>{item.emailAddress}</th>
                <th>{item.region}</th>
                <th
                  style={{
                    color: item.status == "Active" ? " #7CFC00" : "#D22B2B",
                  }}
                >
                  {item.status}
                </th>
              </tr>
            </tbody>
          )
        })}
      </Table>
    </div>
  )
}

export default Employees
