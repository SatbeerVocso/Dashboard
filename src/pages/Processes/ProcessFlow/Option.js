import React, { useState } from "react"
import Draggable from "react-draggable"
import "./processflow.css"

function Option(props) {
  
  const handleClick = (label, e) => {
    e.stopPropagation()
    let ThirdNodeposition
    let FourthNodeposition
    let thirdnodeStyle 
    if (label === "Input") {
      ThirdNodeposition = {
        x: 700,
        y: 300,
      }
      FourthNodeposition = {
        x: 805,
        y: 500,
      }
      thirdnodeStyle ={
        fontSize: 18,
        // backgroundColor: "#00888b",
        color: "whitesmoke",
        width: "350px",
        height: "250px",
        border: "none",
      }
    } else if (label === "Approval") {
      ThirdNodeposition = {
        x: 200,
        y: 300,
      }
      FourthNodeposition = {
        x: 405,
        y: 500,
      }
      thirdnodeStyle ={
        fontSize: 18,
        // backgroundColor: "#0166a2",
        width: "350px",
        height: "250px",
        border: "none",
        color: "whitesmoke",
      }
    } 
    // else {
    //   ThirdNodeposition = {
    //     x: 300,
    //     y: 300,
    //   }
    //   FourthNodeposition = {
    //     x: 300,
    //     y: 400,
    //   }
    // }
    props.onAddNode(label, ThirdNodeposition, FourthNodeposition,thirdnodeStyle)
  }

  return (
    <Draggable>
      <div
        style={{
          marginTop: "280px",
          marginLeft: "10px",
          cursor: "pointer",
          position: "absolute",
          zIndex: 5,
        }}
      >
        <div className="box">
          <div className="option input" onClick={e => handleClick("Input", e)}>
            Input
          </div>
          <div
            className="option approval"
            onClick={e => handleClick("Approval", e)}
          >
            Approval
          </div>
          <div
            className="option branch"
            onClick={e => handleClick("Branch", e)}
          >
            Branch
          </div>
          
        </div>
      </div>
    </Draggable>
  )
}

export default Option
