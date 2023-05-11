import React, { useState } from "react"
import { Label, Input } from "reactstrap"
import TextInput from "common/TextInput"

function Processfieldata(props) {
  const [fieldTypeData, setfieldTypeData] = useState("")

  return (
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
  )
}

export default Processfieldata
