// import React from "react"
import avatarImg1 from "../../../assets/images/users/avatar-1.jpg"
import avatarImg2 from "../../../assets/images/users/avatar-2.jpg"
import avatarImg3 from "../../../assets/images/users/avatar-3.jpg"
import avatarImg4 from "../../../assets/images/users/avatar-4.jpg"
import avatarImg5 from "../../../assets/images/users/avatar-5.jpg"
import avatarImg6 from "../../../assets/images/users/avatar-6.jpg"


import React from "react"

export const EmployeeData = {
  columns: [
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Profile",
      field: "profile",
      sort: "asc",
      width: 270,
    },
    {
      label: "Number",
      field: "number",
      sort: "asc",
      width: 200,
    },
    {
      label: "Email",
      field: "email",
      sort: "asc",
      width: 100,
    },
    {
      label: "Department",
      field: "department",
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
      label: "Status",
      field: "status",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [
    {
      name: "Tiger Nixon",
      profile: (
        <img className="rounded-circle header-profile-user " src={avatarImg1} />
      ),
      number: "8929356478",
      email: "Sat@gmail.com",
      department: "HR",
      designation: "HR Director",
      status: "Active",
    },
    {
      name: "Mexi Cab",
      profile: (
        <img className="rounded-circle header-profile-user " src={avatarImg2} />
      ),
      number: "8929356478",
      email: "Sat222@gmail.com",
      department: "HR",
      designation: "HR Intern",
      status: "Active",
    },
    {
      name: "Tiger Nixon",
      profile: (
        <img className="rounded-circle header-profile-user " src={avatarImg4} />
      ),
      number: "8929356478",
      email: "Sat@gmail.com",
      department: "HR",
      designation: "HR Director",
      status: "Active",
    },
    {
      name: "Marcus Stoinis",
      profile: (
        <img className="rounded-circle header-profile-user " src={avatarImg3} />
      ),
      number: "8929356478",
      email: "mark@gmail.com",
      department: "IT",
      designation: "Senior Developer",
      status: "Active",
    },
    {
      name: "Tiger Nixon",
      profile:<img className="rounded-circle header-profile-user " src={avatarImg5}/>,
      number:'8929356478',
      email:'Sat@gmail.com',
      department:'HR',
      designation:'HR Director',
      status:'Active'
    },
    {
      name: "Tiger Nixon",
      profile:<img className="rounded-circle header-profile-user " src={avatarImg1}/>,
      number:'8929356478',
      email:'Sat@gmail.com',
      department:'HR',
      designation:'HR Director',
      status:'Active'
    },
    {
      name: "Nixon",
      profile:<img className="rounded-circle header-profile-user " src={avatarImg6}/>,
      number:'8929356478',
      email:'Sat@gmail.com',
      department:'HR',
      designation:'HR Director',
      status:'Active'
    },
    {
      name: "Tiger Nixon",
      profile:<img className="rounded-circle header-profile-user " src={avatarImg1}/>,
      number:'8929356478',
      email:'Sat@gmail.com',
      department:'HR',
      designation:'HR Director',
      status:'Active'
    },
    {
      name: "Tiger Nixon",
      profile:<img className="rounded-circle header-profile-user " src={avatarImg1}/>,
      number:'8929356478',
      email:'Sat@gmail.com',
      department:'HR',
      designation:'HR Director',
      status:'Active'
    }
    , {
      name: "Tiger Nixon",
      profile:<img className="rounded-circle header-profile-user " src={avatarImg1}/>,
      number:'8929356478',
      email:'Sat@gmail.com',
      department:'HR',
      designation:'HR Director',
      status:'Active'
    },
    {
      name: "Tiger Nixon",
      profile:<img className="rounded-circle header-profile-user " src={avatarImg1}/>,
      number:'8929356478',
      email:'Sat@gmail.com',
      department:'HR',
      designation:'HR Director',
      status:'Not-Active'
    }
  ],
}
