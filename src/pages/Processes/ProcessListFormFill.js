import React, { useEffect, useState } from "react"
import TextInput from "common/TextInput"
import { Button, Card, CardBody } from "reactstrap"
import { motion, AnimatePresence } from "framer-motion"
import { v4 as uuidv4 } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "store/ProcessMessageListSlice.js/ProcessMessageListSlice"

function ProcessListFormFill() {
  const username = useSelector(state => state.userName)
  const [data, SetData] = useState([])
  const [texts, setTexts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    }
    fetch("http://localhost:1337/api/createddataprocesses", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result.data)
        SetData(result.data)
        setTexts(Array(result.data.length).fill(""))
      })
      .catch(error => console.log("error", error))
  }, [])

  const handleTextChange = (index, value) => {
    const updatedTexts = [...texts]
    updatedTexts[index] = value
    setTexts(updatedTexts)
  }

  const date = new Date()
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.getDate()

  const Submithandler = e => {
    e.preventDefault()
    const message = {
      id: uuidv4(), // Generate a unique ID for each message
      senderName: username.name, // Set the sender's name
      heading: data[0].attributes ? data[0].attributes.Heading : "", // Set the heading
      requestName: data[0]?.attributes?.NameoftheRequest || "", // Set the request name
      time: month + " " + day, // Set the current time
    }
    console.log(message)
    dispatch(addMessage(message))
  }

  return (
    <div className="page-content">
      <AnimatePresence >
        <motion.div
          initial={{ y: 1000 }} // Set initial position off-screen
          animate={{ y: 0 }} // Animate to final position on-screen
          exit={{ y: 1000 }} // Animate exit off-screen
          transition={{ duration: 0.5 }} // Animation duration
        >
          <div className="mt-3" style={{ marginLeft: "3em" }}>
            <h2>{data[0]?.attributes?.NameoftheRequest || ""}</h2>
            <div style={{ width: "60%", margin: "auto" }}>
              <Card className="mt-4">
                <CardBody>
                  {data.length === 0 && (
                    <h2 className="text-center">No Request Found</h2>
                  )}
                  {data.length > 0 && (
                    <>
                      <h4 style={{ textDecoration: "underline" }}>
                        {data[0].attributes ? data[0].attributes.Heading : ""}
                      </h4>
                      {data.map((item, i) => {
                        return (
                          <div key={i} className="mt-4">
                            <TextInput
                              label={item.attributes.Label}
                              type={item.attributes.Type}
                              value={texts[i]}
                              onChange={e =>
                                handleTextChange(i, e.target.value)
                              }
                            />
                          </div>
                        )
                      })}
                    </>
                  )}
                  {data.length > 0 && (
                    <Button
                      color="primary"
                      onClick={Submithandler}
                      className="mt-4"
                    >
                      Submit
                    </Button>
                  )}
                </CardBody>
              </Card>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ProcessListFormFill
