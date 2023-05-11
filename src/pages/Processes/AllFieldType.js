import React from "react"

function AllFieldType(props) {
  const handleFieldTypeClick = clickedfieldtype => {
    props.data(clickedfieldtype)
  }
  const spanstyle = { marginLeft: "7px", fontSize: "1.2em" }
  return (
    <div
      className="bg-primary text-white d-flex justify-content-around"
      style={{ padding: "5px", borderRadius: "8px", cursor: "pointer" }}
    >
      <div>
        <div onClick={() => handleFieldTypeClick("text")}>
          <i className="ti-text"></i>
          <span style={spanstyle}>Text</span>
        </div>
        <div
          onClick={() => handleFieldTypeClick("number")}
          className="mt-1 mb-1"
        >
          <i className="ti-money"></i>
          <span style={spanstyle}>Currency</span>
        </div>
        <div onClick={() => handleFieldTypeClick("file")}>
          <i className="ti-files">
            <span style={spanstyle}>File</span>
          </i>
        </div>
      </div>

      <div>
        <div onClick={() => handleFieldTypeClick("date")} className="mt-1 mb-1">
          <i className="ti-calendar">
            <span style={spanstyle}>Date</span>
          </i>
        </div>

        <div onClick={() => handleFieldTypeClick("time")} className="mt-1 mb-1">
          <i className="ti-world">
            <span style={spanstyle}>Time</span>
          </i>
        </div>
        <div onClick={() => handleFieldTypeClick("textarea")}>
          <i className="ti-text">
            <span style={spanstyle}>Text-area</span>
          </i>
        </div>
      </div>

    </div>
  )
}

export default AllFieldType
