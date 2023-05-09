import React from "react"
import { Card, Row, CardBody, Col, Label, Input } from "reactstrap"
import { motion } from "framer-motion"
function OrganizationSettings() {

  const headerstyle = {
    width: "30%",
    paddingLeft: "3em",
  }
  const cardstyle = {
    width: "65%",
  }
  return (
    <div className="page-content">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <h4 className="mt-4">App Setup</h4>
      <div className="d-flex align-content-center">
        <h5 style={headerstyle} className="mt-4 ">
          App Information
        </h5>
        <Card style={cardstyle}>
          <CardBody>
            <div>
              <Label className="mb-0">App Name</Label>
              <Input type="text" placeholder="Enter App name"></Input>
            </div>
            <div>
              <Label className="mb-0 mt-4">Api Contact Email</Label>
              <Input type="email" placeholder="Enter the email"></Input>
            </div>
          </CardBody>
        </Card>
      </div>
      <hr className="mt-1" />
      <div className="d-flex">
        <h5 style={headerstyle} className="mt-4 ">
          URLs
        </h5>
        <Card style={cardstyle}>
          <CardBody>
            <div>
              <Label className="mb-0">App URL</Label>
              <Input type="text" placeholder="Enter URL"></Input>
            </div>
            <div>
              <Label className="mb-0 mt-4">Preferences URL(optional)</Label>
              <Input
                type="text"
                placeholder="eg https://example.com/preferences"
              ></Input>
            </div>
            <div>
              <Label className="mb-0 mt-4">Allowed redirection URL(s)</Label>
              <Input
                type="text"
                placeholder="eg https://example.com/preferences"
              ></Input>
            </div>
          </CardBody>
        </Card>
      </div>
      <hr className="mt-1" />

      <div className="d-flex">
        <h5 style={headerstyle} className="mt-4 ">
          App Icon
        </h5>
        <Card style={cardstyle}>
          <CardBody>
            <div>
              <Label className="mb-0 ">Upload Icon</Label>
              <Input type="file" placeholder="Upload Icons"></Input>
            </div>
          </CardBody>
        </Card>
      </div>
      <hr className="mt-1" />
      </motion.div>
      
    </div>
  )
}

export default OrganizationSettings
