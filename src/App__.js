import logo from './logo.svg';
import './App.css';
import React from 'react';
import Graphin, { Utils } from '@antv/graphin';

import data from './data/graphindata'

// const graph = new G6.Graph({
//   container: 'mountNode', // String | HTMLElement, required, the id of DOM element or an HTML node
//   width: 800, // Number, required, the width of the graph
//   height: 500, // Number, required, the height of the graph
// });
console.log(data,"data")
const dataVisual =
// console.log(dataVisual,'dataVisual')
//Utils.mock(10).circle().graphin();

function App() {
  return (
 <>
  asdasd
  <Graphin data={dataVisual} layout={{ type: 'grid' }}></Graphin>; 
 </>
  
  );
}

export default App;
