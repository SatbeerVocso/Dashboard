import React, { useState } from "react"
import { Button, Input } from "reactstrap"
import "./processflow.css"
import InputDone from "./InputDone"
function Inputs() {
  const [heading, setHeading] = useState("")
  const [isInputClicked, setisInputClicked] = useState(false)
  const [isInputClicked2, setisInputClicked2] = useState(false)

  const [searchText, setSearchText] = useState("")
  const [results, setResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)

  const [submit, setSubmit] = useState(false)

  const emails = [
    "james@example.com",
    "virat2@example.com",
    "King@example.com",
    "vikas@example.com",
    "Anybod@example.com",
    "example6@example.com",
    "example7@example.com",
    "example8@example.com",
    "example9@example.com",
    "example10@example.com",
  ]

  const handleInputChange = event => {
    const { value } = event.target
    setSearchText(value)

    const filteredResults = emails.filter(email =>
      email.toLowerCase().includes(value.toLowerCase())
    )
    setResults(filteredResults)
  }
  const handleResultSelect = result => {
    const index = emails.indexOf(result)
    setSelectedIndex(index)
    setSearchText("")
    setResults([])
  }

  const closeHandler = () => {
    setSelectedIndex(null)
  }

  const Submithandler = () => {
    setSubmit(true)
  }

  const InputStyle = {
    border: "none",
    borderBottom: "2px solid",
    transition: "border-bottom-color 0.1s ease",
    borderBottomColor: isInputClicked ? "#9d40ab" : "",
  }
  return (
    <div className="mt-2" style={{ color: "black" }}>
      {submit ? (
        <InputDone
          heading={heading}
          mail={selectedIndex !== null ? emails[selectedIndex] : ""}
          setSubmit={setSubmit}
        />
      ) : (
        <div>
          <div>
            <Input
              className="mb-4 mt-2"
              type="heading"
              style={{ ...InputStyle, color: "#9d40ab", width: "75%" }}
              value={heading}
              onClick={() => {
                setisInputClicked(!isInputClicked)
              }}
              onChange={e => {
                setHeading(e.target.value)
              }}
              placeholder="Untitled Step"
            ></Input>
          </div>
          <div style={{ textAlign: "left", fontSize: "15px" }}>
            <span>Who Can Input this ?</span>
          </div>
          <div className="mt-1">
            {selectedIndex !== null && (
              <div
                className="d-flex"
                style={{ textAlign: "left", fontSize: "13px" }}
              >
                <p
                  style={{
                    backgroundColor: "#daddf5",
                    paddingRight: "0.5em",
                    paddingLeft: "0.5em",
                  }}
                >
                  {emails[selectedIndex]}
                  <i
                    className="ti-close"
                    style={{ marginLeft: "1em", cursor: "pointer" }}
                    onClick={closeHandler}
                  ></i>
                </p>
              </div>
            )}
            <Input
              type="text"
              value={searchText}
              onChange={handleInputChange}
              placeholder="Start typing..."
              style={{
                border: "none",
                borderBottom: "2px solid",
                transition: "border-bottom-color 0.1s ease",
                borderBottomColor: isInputClicked2 ? "#9d40ab" : "",
                width: "75%",
              }}
              onClick={() => {
                setisInputClicked2(!isInputClicked2)
              }}
            />
            {results.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#daddf5",
                  width: "75%",
                }}
              >
                {results.map((result, index) => (
                  <span
                    key={result}
                    onClick={() => handleResultSelect(result)}
                    style={{ cursor: "pointer", fontSize: "15px" }}
                    className="mt-1 mb-1"
                  >
                    {result}
                  </span>
                ))}
              </div>
            )}
            {results.length === 0 && (
              <p>{results.length === 0 ? "" : "No Data Found"}</p>
            )}
          </div>

          <div
            className="mt-2"
            style={{ position: "absolute", right: 20, bottom: 10 }}
          >
            <Button color="success" onClick={Submithandler}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Inputs
