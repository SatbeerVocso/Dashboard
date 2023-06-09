import React, { useCallback, useState } from "react"
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
} from "react-flow-renderer"
import "./processflow.css"
import Option from "./Option"
import Approval from "./Approval"
import Inputs from "./Input"
const ProcessFlow = () => {
  const [showComponent, setShowComponent] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: "1",
      type: "input",
      data: { label: "Purchase Request" },
      position: { x: 500, y: 0 },
      style: {
        fontSize: 18,
        backgroundColor: "#00888b",
        color: "whitesmoke",
        width: "250px",
        height: "100px",
        border: "none",
      },
    },
    {
      id: "2",
      type: "default",
      data: {
        label: (
          <div className="label">
            <i className="ti-plus"></i>
          </div>
        ),
      },
      position: { x: 606, y: 200 },
      className: "custom-node",
    },
  ])
  const [edges, setEdges, onEdgesChange] = useEdgesState([
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "straight",
    },
  ])

  const onConnect = useCallback(
    params => setEdges(eds => addEdge(params, eds)),
    [setEdges]
  )

  const handleElementClick = event => {
    const clickedNode = event.target.closest(".react-flow__node")
    if (clickedNode) {
      const nodeId = clickedNode.getAttribute("data-id")
      console.log(nodeId)
      if (nodeId === "2") {
        setShowComponent(!showComponent)
      }
    }
  }

  const addNode = (
    label,
    ThirdNodeposition,
    FourthNodeposition,
    thirdnodeStyle
  ) => {
    let newNode =[]
    if(label==='Approval'){
      newNode = [
        {
          id: (nodes.length + 1).toString(),
          type: "default",
          data: { label: <Approval/> },
          position: ThirdNodeposition,
          style: thirdnodeStyle
        },
        // {
        //   id: (nodes.length + 2).toString(),
        //   type: "default",
        //   data: { label: <i className="ti-plus"></i> },
        //   position: FourthNodeposition,
        //   className: "custom-node",
        // },
      ]
    }
    else if(label==="Input"){
      newNode = [
        {
          id: (nodes.length + 1).toString(),
          type: "default",
          data: { label: <Inputs/> },
          position: ThirdNodeposition,
          style: thirdnodeStyle
        },
      ]
    }
    
    const newEdge = [
      {
        id: `e2-${newNode[0].id}`,
        source: "2",
        target: newNode[0].id,
        type: "straight",
      },
      // {
      //   id: `e3-${newNode[1].id}`,
      //   source: (nodes.length + 1).toString(),
      //   target: newNode[1].id,
      //   type: "straight",
      // },
    ]
    setNodes(nds => nds.concat(newNode))
    setEdges(eds => eds.concat(newEdge))
    setShowComponent(false)
  }

  return (
    <div>
      <div style={{ width: "100%", height: "100vh" }}>
        <ReactFlow
          onNodeClick={eve => handleElementClick(eve)}
          deleteKeyCode={46}
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        >
          {" "}
          {showComponent && <Option onAddNode={addNode} />}
        </ReactFlow>
      </div>
    </div>
  )
}

export default ProcessFlow
