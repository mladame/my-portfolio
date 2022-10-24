import React from "react";
import ProjectContainer from "./ProjectContainer";
// import '../styles/';

// In our return method, we use the map method to return a new array 
function Project(props) {
// for each project return a card
const numbers = props.numbers;
return (
  <ul>
    {numbers.map((number) =>
      <ListItem key={number.toString()}
                value={number} />
    )}
  </ul>
);
}

export default Project;