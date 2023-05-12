import React, { useState } from "react"
import { CardBody, Card } from "reactstrap"
import TextInput from "common/TextInput"

function Processfieldata(props) {
  const [fieldTypeData, setfieldTypeData] = useState("")

  return (
    <Card>
      <CardBody>
        <div style={{ width: "60%", margin: "auto" }}>
          <div className="mb-1 mt-3">
            <TextInput
              label={props.fieldname}
              type={props.fieldtype}
              value={fieldTypeData}
              onChange={e => {
                setfieldTypeData(e.target.value)
              }}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default Processfieldata
