import React from "react"

export const DepartmentData = {
  columns: [
    {
      label: "ID",
      field: "id",
      sort: "asc",
      width: 150,
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Designation",
      field: "designation",
      sort: "asc",
      width: 100,
    },
    {
      label: "State",
      field: "state",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [
    {
      id: "1",
      name: "HR",
      designation:  <i className="ti-angle-down">3 Items</i>,
      state: "Published",
    },
    {
      id: "2",
      name: "HR",
      designation: <i className="ti-angle-down">3 Items</i>,
      state: "Published",
    },
    {
      id: "3",
      name: "IT",
      designation: <i className="ti-angle-down">3 Items</i>,
      state: "Published",
    },
    {
      id: "4",
      name: "Accounts",
      designation: <i className="ti-angle-down">3 Items</i>,
      state: "Published",
    },
  ],
}
