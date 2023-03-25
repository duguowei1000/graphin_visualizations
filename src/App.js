import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Graphin, { Utils,Behaviors, GraphinContext } from '@antv/graphin';
import IconLoader from '@antv/graphin-icons';
// const { FitView, DragCanvas } = Behaviors;


const icons = Graphin.registerFontFamily(IconLoader);

// const FocusItem = () => {
//   const { graph } = React.useContext(GraphinContext);
//   useEffect(() => {
//     graph.focusItem('node-3', true);
//     graph.setItemState('node-3', 'selected', true);
//   }, []);
//   return null;
// };

// const shouldBegin = () => {
//   return true;
// };

const data = Utils.mock(11).circle().graphin();
const layout = {
  type: "concentric",
  nodeSize: 200
};

data.nodes = [
  {
    id: 'node-0', // String, unique and required
    x: 100, // Number, the x coordinate
    y: 200, // Number, the y coordinate
    nodeSize: 250,
    style: {
      label: {
        value: "Node 0 ",
        fontSize: 7,
        fill: "blue",
        offset: [0, -15]
      },
      icon: {
        fontFamily: 'graphin',
        type: 'font',
        value: icons.user,
      },
    }
  },
  {
    id: 'node-1', // String, unique and required
    style: {
      label: {
        value: "Node 1 ",
        fontSize: 7,
        fill: "red",
        offset: [0, -15]
      }
    },
    x: 600, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
  {
    id: 'node-3', // String, unique and required
    x: 100, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
  {
    id: 'node-4', // String, unique and required
    x: 300, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
  {
    id: 'node-5', // String, unique and required
    x: 100, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
  {
    id: 'node-6', // String, unique and required
    x: 300, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
  {
    id: 'node-7', // String, unique and required
    x: 100, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
  {
    id: 'node-8', // String, unique and required
    x: 300, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
  {
    id: 'node-9', // String, unique and required
    x: 100, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
  {
    id: 'node-10', // String, unique and required
    x: 300, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },  {
    id: 'node-11', // String, unique and required
    x: 300, // Number, the x coordinate
    y: 200, // Number, the y coordinate
  },
]

// data.nodes.forEach(node => {
//   node.style = {
//     icon: {
//       fontFamily: 'graphin',
//       type: 'font',
//       value: icons.user,
//     },
//   };
// });
data.edges = [
  {
    source: "node-0",
    target: "node-1",
    style: {
      label: {
        value: "ISSUE DETECTED ",
        fontSize: 26,
        fill: "red",
        offset: [0, 0]
      },
      keyshape: {
        stroke: "red",
        lineWidth: 4
      }
    }
  },
  {
    source: "node-0",
    target: "node-2",
    style: {
      label: {
        value: "User "
      },
      keyshape: {
        lineDash: [4, 4]
      }
    }
  },
  {
    source: "node-0",
    target: "node-3",
    style: {
      label: {
        value: "User"
      },
      keyshape: {
        endArrow: {
          path: "M 0,0 L 8,4 L 8,-4 Z",
          fill: "#545872"
        }
      }
    }
  },
  {
    source: "node-0",
    target: "node-4",
    style: {
      label: {
        value: "Dynamic Group",
        fill: "blue",
        fontSize: 14,
        offset: [0, 0]
      }
    }
  },
  {
    source: "node-0",
    target: "node-5",
    style: {
      label: {
        value: "设置 halo 光晕"
      },
      halo: {
        fill: "#ddd",
        visible: true
      }
    }
  },
  {
    source: "node-0",
    target: "node-6",
    style: {
      label: {
        value: "None Dynamic Group ",
        fill: "blue",
        fontSize: 12,
        background: {
          // 设置背景的填充色
          fill: "lightgreen",
          // 设置圆角
          radius: 8,
          // 设置border，即 stroke
          stroke: "#000"
        }
      }
    }
  },
  {
    source: "node-0",
    target: "node-8",
    style: {
      keyshape: {
        lineDash: [8, 4],
        lineWidth: 2
      },
      animate: {
        type: "line-dash",
        repeat: true
      }
    }
  },
  {
    source: "node-0",
    target: "node-9",
    style: {
      keyshape: {
        lineWidth: 1
      },
      animate: {
        type: "circle-running",
        color: "green",
        repeat: true,
        duration: 4000
      }
    }
  }
];



function App() {
  return (
 <>
  asdasd
  <Graphin
      data={data}
      layout={layout}
      theme={{ mode: 'light' }}
      // {{ type: "concentric", nodeSize: 300 }}
      height="1000"
    />
                {/* <FitView /> */}
        {/* <ZoomCanvas disabled /> */}
        {/* <FocusItem /> */}
        {/* <DragCanvas shouldBegin={shouldBegin} ></DragCanvas> */}
    
    
    {/* <Graphin/> */}
 </>
  
  );
}

export default App;
