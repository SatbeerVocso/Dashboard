import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//Calendar
import calendar from "./calendar/reducer"
// ProcessListMessage
import ProcessMessageListSlice from "./ProcessMessageListSlice.js/ProcessMessageListSlice"

//UserName
import UserNameSlice from "./UserNameSlice/UserNameSlice"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  calendar,
  processMessages: ProcessMessageListSlice,
  userName:UserNameSlice
})

export default rootReducer
