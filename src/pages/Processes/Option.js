import React, { useState } from "react";
import "./Processes.css";
import Draggable from "react-draggable";

function Option(props) {
  const handleClick = (label, e) => {
    console.log("insidehandleclick Option comp",e, label);
    e.stopPropagation();
    let ThirdNodeposition;
    let FourthNodeposition;
    if (label==='End'){
      ThirdNodeposition = {
         x: 100, y: 300 
        }
        FourthNodeposition = {
          x:100,y:400
        }
    }
    else if (label === 'Input'){
      ThirdNodeposition = {
       x: -100, y: 300 
      }
      FourthNodeposition = {
        x:-100,y:400
      }
    }
    else if(label==='Approval'){
      ThirdNodeposition = {
       x: -300, y: 300 
      }
      FourthNodeposition = {
        x:-300,y:400
      }
    }
    else{
      ThirdNodeposition = {
       x: 300, y: 300 
      }
      FourthNodeposition = {
        x:300,y:400
      }
    }
     props.onAddNode(label,ThirdNodeposition,FourthNodeposition);
  };

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
          <div
            className="option input"
            onClick={(e) => handleClick("Input", e)}
          >
            Input
          </div>
          <div
            className="option approval"
            onClick={(e) => handleClick("Approval", e)}
          >
            Approval
          </div>
          <div
            className="option branch"
            onClick={(e) => handleClick("Branch", e)}
          >
            Branch
          </div>
          <div className="option end" onClick={(e) => handleClick("End", e)}>
            End
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default Option;
