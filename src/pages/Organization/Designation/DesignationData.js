import React from "react"

export const DesignationData = {
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
      label: "Department",
      field: "department",
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
      name: "Senior Developer",
      department: <i className="ti-angle-down">1 Items</i>,
      state: "Published",
    },
    {
      id: "2",
      name: "Sales Executive",
      department:  <i className="ti-angle-down">1 Items</i>,
      state: "Published",
    },
    {
      id: "3",
      name: "Junior Developer",
      department:  <i className="ti-angle-down">1 Items</i>,
      state: "Published",
    },
    {
      id: "4",
      name: "Accountant",
      department:  <i className="ti-angle-down">1 Items</i>,
      state: "Published",
    },
  ],
}
