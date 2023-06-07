import React, { useRef } from "react";
import { Label } from "reactstrap";
import jsPDF from "jspdf";

function DataField() {
  
  const handleExportClick = () => {
    // Form data
    const formData = {
      vendorName: "MahaLaxmi Vendor",
      itemName: "Paints",
      itemCost: "$2000",
      balanceLeft: "$50000",
    };

    // Create a new PDF document
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Form Data", 10, 10);

    // Iterate through the form data and add it to the PDF
    let y = 30;
    for (const [label, value] of Object.entries(formData)) {
      doc.text(`${label}: ${value}`, 10, y);
      y += 10;
    }

    // Save the PDF as a file with name
    doc.save("form_data.pdf");
  };

  const labelfont = {
    fontSize: "1.2em",
  };

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
          <Label style={labelfont}>Balance Left</Label>
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
          Download (pdf)
          <i className="ti-download" />
        </div>
      </div>
    </div>
  );
}

export default DataField;
