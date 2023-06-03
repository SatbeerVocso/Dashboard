import React, { useEffect, useState } from "react"
import TextInput from "common/TextInput"
import { Button, Card, CardBody } from "reactstrap"

function GettingRequest() {
  const [data, SetData] = useState([])

  const [texts, setTexts] = useState([])

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
        console.log(result.data)
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

  const Submithandler = e => {
    e.preventDefault()
    console.log(texts)
  }

  return (
    <div className="page-content">
      <div className="mt-3" style={{ marginLeft: "3em" }}>
        <h2>Getting Request</h2>
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
                          onChange={e => handleTextChange(i, e.target.value)}
                        />
                      </div>
                    )
                  })}
                </>
              )}
              {
                data.length > 0 &&<Button color="primary" onClick={Submithandler} className="mt-4">
                Approved
              </Button>
              }
              
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default GettingRequest
