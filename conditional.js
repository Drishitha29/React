import React from "react";

function Greeting({ isLoggedIn }) {
  if(isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}

export default Greeting;

// import React from "react";
// import Greeting from "./Conditional";

// function App() {
//   return (
//     <div>
//       <Greeting isLoggedIn={true} />
//     </div>
//   );
// }

// export default App;


import React from "react";

const FruitList =()=>{
  const fruits = ["apple", "banana", "cherry"];
  return (
    <>
    <h1>Fruit List</h1>
    <ol>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ol>
    </>
  );
}

export default FruitList;

#lists and keys:
in react it is a collection of items you want to display

Keys : helps us to keep the track of items in a list 
== react knows which items you have changed

Map() : allows us to elements in array 
==function will be applied to all elements

const n = [1,2,3,4,5]
const d = n.Map(num=>num*2)
console.log(d)
