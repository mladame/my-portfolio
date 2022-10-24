import React from "react";
import github from "../../assets/images/GitHub-Mark-32px.png";
// import '../styles/';

// In our return method, we use the map method to return a new array 
function Project(props) {
// for each project return a card 
const projectPhoto = props.image;
const title = props.title;
const description = props.description;
const repoLink = props.repo;
const deployedLink = props.deployedLink;

return (
  <Card className="bg-dark text-white">
  <Card.Img src={projectPhoto} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Card.Img src={github} href={repoLink} alt="Project Repository"/>
    <Card.Img src={deployed} href={deployedLink} alt="Deployed Webpage"/>
  </Card.ImgOverlay>
</Card>

  // <ul>
  //   {numbers.map((number) =>
  //     <ListItem key={number.toString()}
  //               value={number} />
  //   )}
  // </ul>
);
}

export default Project;