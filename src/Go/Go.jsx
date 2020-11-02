import React from 'react';
//import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './Go.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;
//comment again

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  createArray(height, width) 
  {
      let data = [];
      for (let i = 0; i < height; i++)
      {
            data.push([]);
            for (let j = 0; j < width; j++)
            {
                data[i][j] = {
                    x: i,
                    y: j,
                };
            }
      }
      return data;
  }
  resetArray() {
    // const array = [];
    // for (let i = 0; i < 20; i++) {
    //   array.push(i);
    // }
    let array = this.createArray(10,10);
    this.setState({array});
  }
  
  renderBoard(data)
  {
      return data.map((dataRow) => {
          return dataRow.map((dataItem) =>{
              return (
                  <div
                   key={dataItem.x * dataRow.length + dataItem.y}>
                   </div>
              );
          });
      });
  }

  render() {

    return renderBoard(array);
//     const {array} = this.state;

//     return (
//       <div className="array-container">
//         {array.map((x, y) => (
//           <div
//             className="array-bar"            
//             key={idx}
//             style={{
//               width: `10px`,  
//               backgroundColor: PRIMARY_COLOR,
//               height: `10px`,
              
//             }}></div>
//         ))}        
//       </div>
//     );
   }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}