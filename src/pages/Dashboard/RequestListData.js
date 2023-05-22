import avatarImg2 from '../../assets/images/users/avatar-2.jpg'
import avatarImg3 from '../../assets/images/users/avatar-3.jpg'
import avatarImg4 from '../../assets/images/users/avatar-4.jpg'
import avatarImg5 from '../../assets/images/users/avatar-5.jpg'
import avatarImg6 from '../../assets/images/users/avatar-6.jpg'
import avatarImg7 from '../../assets/images/users/avatar-7.jpg'
import avatarImg8 from '../../assets/images/users/avatar-8.jpg'

export const RequestListData = {
  TodayRequestListData:[
    {
      id: 1,
      title: "Draft the new contract document for sales team",
      assigned_to: "Arya Stark",
      assignee_avatar: avatarImg2,
      due_date: "Today 10am",
      completed: false,
      priority: "High",
      variant:"danger"
    },
    {
      id: 2,
      title: "iOS App home page",
      assigned_to: "James B",
      assignee_avatar: avatarImg3,
      due_date: "Today 4pm",
      completed: false,
      stage: "In-progress",
      priority: "High",
      variant:"danger"
    },
    {
      id: 3,
      title: "Write a release note",
      assigned_to: "Kevin C",
      assignee_avatar: avatarImg6,
      due_date: "Today 4pm",
      completed: false,
      stage: "In-progress",
      priority: "Medium",
      variant:"success"
    },
  ],
  UpcomingRequestListData:[
    {
      id: 4,
      title: "Invite user to a project",
      assigned_to: "Arya Stark",
      assignee_avatar: avatarImg2,
      due_date: "Tomorrow 10am",
      stage: "Todo",
      completed: false,
      priority: "Low",
      variant:"info"
    },
    {
      id: 5,
      title: "Enable analytics tracking",
      assigned_to: "James stark",
      assignee_avatar: avatarImg4,
      due_date: "27 Aug 10am",
      completed: false,
      stage: "Review",
      priority: "Low",
      variant:"info"
    },
    {
      id: 6,
      title: "Code HTML email template",
      assigned_to: "Jimmy c",
      assignee_avatar: avatarImg8,
      due_date: "No Due Date",
      completed: false,
      stage: "Review",
      priority: "Medium",
      variant:"success"
    }
  ],
  OtherRequestListData:[
    {
      id: 7,
      title: "Coordinate with business development",
      assigned_to: "Arya Stark",
      assignee_avatar: avatarImg2,
      due_date: "No Due Date",
      stage: "Todo",
      completed: false,
      priority: "High",
      variant:"danger"
    },
    {
      id: 8,
      title: "Kanban board design",
      assigned_to: "James B",
      assignee_avatar: avatarImg5,
      stage: "Review",
      due_date: "30 Aug 10am",
      completed: false,
      priority: "Low",
      variant:"info"
    },
    {
      id: 9,
      title: "Draft the new contract document for sales team",
      assigned_to: "Kevin C",
      assignee_avatar: avatarImg6,
      due_date: "No Due Date",
      stage: "Done",
      completed: false,
      priority: "Medium",
      variant:"success"
    },
    {
      id: 10,
      title: "Draft the new contract document for vendor Abc",
      assigned_to: "Paul D",
      assignee_avatar: avatarImg7,
      due_date: "2 Sep 10am",
      completed: false,
      stage: "Done",
      priority: "Medium",
      variant:"success"
    }
  ]
}

