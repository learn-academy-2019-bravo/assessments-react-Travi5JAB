console.log("Change");
// React Assessments

// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
//
// import React, { Component }from 'react';
// import './App.css';
//
//
// class Print extends Component {
//     constructor(){
//         this.state{
//             compLog: "I am a component"
//         }
//     }
//     render(){
//         let {compLog} = this.state
//       return (
//         <div className="App">
//             <h1>{complog}</h1>
//         </div>
//       );
//     }
// }
//
// export default Print;
//
//
//
// }


////////////////////////////////////////////////////////////////////////////

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// stuffArray.map(function(el, i){
//   console.log(el + " is at index: " + i)
// })
// console.log("");
// your for loop here, you can use the same stuffArray array

function loop (arr){
    for (i = 0; i<arr.length; i++){
        var x = arr[i] + " is at index: " + i
        console.log(x);
    }
}

console.log(loop(stuffArray));



console.log("");
////////////////////////////////////////////////////////////////////////////
// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
priceArr = [10,12,65,2,88,109,4,7.5]
function low(arr){
  // your logic here
  let newArr = [1000000000000000000000*1000000000000000000000000000]
  let delArr =[]
  for (i = 0; i<arr.length; i++){
      if(arr[i] < newArr[0]){
          newArr.push(arr[i])
          newArr.reverse()
          newArr.pop()
      }
  }return newArr
}

// will log 2 -- the lowest number in priceArr
console.log(low(priceArr));
////////////////////////////////////////////////////////////////////////////
