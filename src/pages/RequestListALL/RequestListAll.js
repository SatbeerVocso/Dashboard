import React from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { MDBDataTable } from "mdbreact"
import { motion } from "framer-motion"

function RequestListAll() {
  const [data, setData] = useState([])
  const ShowMessages = useSelector(state => state.processMessages)
  console.log(ShowMessages)

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    }

    fetch(
      "http://localhost:1337/api/requestlists?populate=*&pagination[page]=1&pagination[pageSize]=100",
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
        setData(result.data)
      })
      .catch(error => console.log("error", error))
  }, [])

  const formatDateTime = dateTimeString => {
    const date = new Date(dateTimeString)
    const formattedDate = `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getDate()},`
    const formattedTime = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    return `${formattedDate} ${formattedTime}`
  }
  const sortedarray = data.sort((a, b) => b.id - a.id)
  const RequestListTable = {
    columns: [
      {
        label: "Request Id",
        field: "requestid",
        sort: "asc",
        width: 150,
      },
      {
        label: "Initiater",
        field: "initiater",
        sort: "asc",
        width: 150,
      },
      {
        label: "RequestType",
        field: "requestType",
        sort: "asc",
        width: 150,
      },
      {
        label: "Assigned",
        field: "assigned",
        sort: "asc",
        width: 150,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 150,
      },
      {
        label: "Pririoty",
        field: "pririoty",
        sort: "asc",
        width: 150,
      },
    ],
    rows: sortedarray.map((item, i) => ({
      requestid: item.id,
      requestType: item.attributes.requestType,
      initiater: (
        <>
          <span className="me-2">
            {item.attributes.profile &&
            item.attributes.profile.data &&
            item.attributes.profile.data[0].attributes &&
            item.attributes.profile.data[0].attributes.url ? (
              <img
                src={`http://localhost:1337${item.attributes.profile.data[0].attributes.url}`}
                alt="Profile"
                className="rounded-circle header-profile-user"
              />
            ) : (
              <span>No Image</span>
            )}
          </span>
          <span>{item.attributes.username}</span>
        </>
      ),
      date: (
        <div>
          <i className="ti-calendar me-2"></i>
          {formatDateTime(item.attributes.date)}
        </div>
      ),

      assigned:
        item.attributes.Sharing &&
        item.attributes.Sharing.data &&
        item.attributes.Sharing.data.map((image, index) =>
          image.attributes && image.attributes.url ? (
            <img
              key={index}
              src={`http://localhost:1337${image.attributes.url}`}
              alt="Sharing"
              className="rounded-circle header-profile-user"
            />
          ) : (
            <span>No Image</span>
          )
        ),
      status: item.attributes.Status,
      pririoty: (
        <div
          style={{
            backgroundColor:
              item.attributes.priority === "High"
                ? "#FECACA"
                : item.attributes.priority === "Medium"
                ? "#D1FAE5"
                : "#E0E7FF",
            textAlign: "center",
            width: "60px",
            borderRadius: "5px",
          }}
        >
          {item.attributes.priority}
        </div>
      ),
    })),
  }

  return (
    <div className="page-content">
      <div className="container-fluid mt-4">
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
              <h2 className="mt-0 mb-4">All Request list</h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MDBDataTable responsive bordered data={RequestListTable} />
                </motion.div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default RequestListAll
