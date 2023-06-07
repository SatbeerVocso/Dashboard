import PropTypes from "prop-types"
import React from "react"
import { Routes, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { Button } from "reactstrap"

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import NonAuthLayout from "./components/NonAuthLayout"

// Import scss
import "./assets/scss/theme.scss"

//FloatingButton
import FloatingButton from "pages/FloatingButton/FloatingButton"

import { useLocation } from "react-router-dom"

const App = () => {
  const location = useLocation()
  const islogin = location.pathname === "/login"
  const isregister = location.pathname === "/register"

  return (
    <React.Fragment>
      <Routes>
        <Route>
          {authRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
              exact={true}
            />
          ))}
        </Route>

        <Route>
          {userRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<Authmiddleware>{route.component}</Authmiddleware>}
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>
      {!islogin && !isregister && (
      <FloatingButton/>
      )}
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any,
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)


// !islogin checks if the current location is not the login page.
// !isregister checks if the current location is not the register page.
// If both conditions are true, meaning the current location is neither the login page nor the register page, the FloatingButton component is rendered.
// In other words, the FloatingButton component will only be rendered if the user is not on the login or register page. This allows the FloatingButton to appear on other pages throughout the application.