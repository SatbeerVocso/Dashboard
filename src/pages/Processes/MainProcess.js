import React, { useState } from "react"

import {
  Card,
  CardBody,
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"
import Processes from "./Processes/Processes"
import ProcessFlow from "./ProcessFlow/ProcessFlow"
import Publish from "./Publish/Publish"

const MainProcesses = () => {
  const [activeTab, setactiveTab] = useState(1)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 3) {
        setactiveTab(tab)
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <div className="form-horizontal form-wizard-wrapper wizard clearfix mt-4">
            <div
              className="steps clearfix"
              style={{ marginLeft: "16.5em", marginBottom: "3em" }}
            >
              <ul>
                <NavItem className={classnames({ current: activeTab === 1 })}>
                  <NavLink
                    className={classnames({ current: activeTab === 1 })}
                    onClick={() => {
                      setactiveTab(1)
                    }}
                  >
                    <span className="number">1.</span> Process Form
                  </NavLink>
                </NavItem>
                <NavItem className={classnames({ current: activeTab === 2 })}>
                  <NavLink
                    className={classnames({ active: activeTab === 2 })}
                    onClick={() => {
                      setactiveTab(2)
                    }}
                  >
                    <span className="number">2.</span>Process FLow
                  </NavLink>
                </NavItem>
                <NavItem className={classnames({ current: activeTab === 3 })}>
                  <NavLink
                    className={classnames({ active: activeTab === 3 })}
                    onClick={() => {
                      setactiveTab(3)
                    }}
                  >
                    <span className="number">3.</span>
                    Publish
                  </NavLink>
                </NavItem>
              </ul>
            </div>

            <div className="mt-2">
              <TabContent activeTab={activeTab} className="body">
                <TabPane tabId={1}>
                  <Processes />
                </TabPane>
                <TabPane tabId={2}>
                  <ProcessFlow />
                </TabPane>

                <TabPane tabId={3}>
                  <Publish />
                </TabPane>
              </TabContent>
            </div>

            <div className="actions clearfix">
              <ul>
                <li
                  className={activeTab === 1 ? "previous disabled" : "previous"}
                >
                  <Link
                    to="#"
                    onClick={() => {
                      toggleTab(activeTab - 1)
                    }}
                  >
                    Previous
                  </Link>
                </li>
                <li className={activeTab === 3 ? "next disabled" : "next"}>
                  <Link
                    to="#"
                    onClick={() => {
                      toggleTab(activeTab + 1)
                    }}
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default MainProcesses
