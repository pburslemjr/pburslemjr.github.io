import React from 'react';
//import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './Go.css';




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
  
  

  render() {
   
        const {array} = this.state;  

        return (
        <div className="array-container">
            {array.map((dataRow) => (
                <div className="row" key={dataRow.width}>
                    {
                        dataRow.map((dataItem) => (
                            <div
                            className="box"
                            //style={<h2>T</h2>}
                            key={dataItem.x * dataRow.length + dataItem.y}
                            style={{left: dataItem.y * 54 + 'px', top: (dataItem.x - dataItem.y) * 54  + 'px'}}>
                               
                          {/* <h2>{(dataItem.x * dataRow.length + dataItem.y)* 10}</h2> */}
                      </div>
                        ))
                    }
                    </div>
                ))
            }
        </div>
        );
       

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

