import React, { useRef } from "react"
import TextInput from "common/TextInput"

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
  return (
    <div style={{width:'90%',margin:'auto'}}>
      <div className="mt-4">
        <TextInput
          label="Enter the Name of the Vendor"
          value="MahaLaxmi Interior"
        />
        <div className="mt-3">
          <TextInput label="Name of the Items" value="Paints" />
        </div>
        <div className="mt-3">
          <TextInput label="Cost of the Items" value="$3000" />
        </div>
        <div className="mt-3">
          <TextInput label="Finance Left" value="$5000" />
        </div>
        <div
          className="ti-expot mt-3 bg-secondary d-flex justify-content-around align-items-center"
          style={{
            height: "45px",
            width:'30%',
            borderRadius: "0.25rem",
            cursor:'pointer'
          }}
          onClick={handleExportClick}
        >File Attachment
          <i
            className="ti-export"           
          /> 
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
