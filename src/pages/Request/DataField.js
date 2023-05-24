import React, { useRef } from "react"
import { Label } from "reactstrap"

function DataField() {
  const fileInputRef = useRef(null)
  const handleExportClick = () => {
    fileInputRef.current.click()
  }
  const handleFileUpload = e => {
    const file = e.target.files[0]
    // Do something with the uploaded file
    console.log("Uploaded file:", file)
  }
  const labelfont = {
    fontSize:'1.2em'
  }
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div>
        <h4 className="text-center">Form Data</h4>
        <div>
          <Label style={labelfont}>Name of the Vendor</Label>
          <p>MahaLaxmi Vendor</p>
        </div>
        <hr></hr>
        <div className="mt-3">
          <Label style={labelfont}> Name of the Items</Label>
          <p>Paints</p>
        </div>
        <hr></hr>
        <div className="mt-3">
          <Label style={labelfont}>Cost of the Items</Label>
          <p>$2000</p>
        </div>
        <hr></hr>
        <div className="mt-3">
          <Label style={labelfont}>Balnce Left </Label>
          <p>$50000</p>
        </div>
        <div
          className="ti-expot mt-3 bg-secondary d-flex justify-content-around align-items-center"
          style={{
            height: "45px",
            width: "30%",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
          onClick={handleExportClick}
        >
          Download Attachment
          <i className="ti-download" />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  )
}

export default DataField
