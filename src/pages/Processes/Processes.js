// import React, { useCallback, useState } from "react";
// import ReactFlow, {
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
// } from "react-flow-renderer";
// import Option from "./Option";
// import "./Processes.css";

// const Processes = () => {
//   const [showComponent, setShowComponent] = useState(false);
//   const [nodes, setNodes, onNodesChange] = useNodesState([
//     {
//       id: "1",
//       type: "input",
//       data: { label: "Start" },
//       position: { x: 0, y: 100 },
//       style: { fontSize: 20, backgroundColor: "#EEEEEE" },
//     },
//     {
//       id: "2",
//       type: "default",
//       data: { label: '+' },
//       position: { x: 45, y: 200 },
//       className: "custom-node",
//     },
//   ]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([
//     {
//       id: "e1-2",
//       source: "1",
//       target: "2",
//       type: "straight",
//     },
//   ]);

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   const handleElementClick = (event) => {
//     console.log(event, "event");
//     console.log(event.target.dataset.id);
//     if (event.target.dataset.id === "2") {
//       setShowComponent(!showComponent);
//     }
//   };

//   const addNode = (label,ThirdNodeposition,FourthNodeposition) => { 
//     const newNode = [
//       {
//         id: (nodes.length + 1).toString(),
//         type: "default",
//         data: { label: label },
//         position: ThirdNodeposition, 
//       },
//       {
//         id: (nodes.length + 2).toString(),
//         type: "default",
//         data: { label: '+' },
//         position: FourthNodeposition,
//         className: "custom-node",
//       }
//     ] 
//     const newEdge = [
//       {
//         id: `e2-${newNode[0].id}`,
//         source: "2",
//         target: newNode[0].id,
//         type: "straight",
//       },
//       {
//         id: `e3-${newNode[1].id}`,
//         source: (nodes.length + 1).toString(),
//         target: newNode[1].id,
//         type: "straight",
//       }
//     ]
//     setNodes((nds)=>nds.concat(newNode))
//     setEdges((eds)=>eds.concat(newEdge))
//     setShowComponent(false);
//   };
 
//   return (
//     <div className="page-content">
//        <div style={{ width: "100%", height: "100vh" }}>
//         <ReactFlow
//           onNodeClick={(eve) => handleElementClick(eve)}
//           deleteKeyCode={46}
//           nodes={nodes}
//           edges={edges}
//           onConnect={onConnect}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//         >  {showComponent && <Option onAddNode={addNode} />} 
        
//         </ReactFlow>
//       </div>
//     </div>
//   );
// };

// export default Processes;

import React from 'react'

function Processes() {
  return (
    <div className='page-content'>
      <h1>Processes Component</h1>
    </div>
  )
}

export default Processes

