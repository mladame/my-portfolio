import React from "react";
import Card from 'react-bootstrap/Card';
// import github from "../../assets/images/GitHub-Mark-32px.png";
import projectsData from "../../assets/data/projectsData.json";
// import '../styles/';

// In our return method, we use the map method to return a new array 
function Project() {
  // for each project return a card 
  // const projects = data.projects

  const {projects} = projectsData

  return (
    <div>
      {projects.map((project, index) => {
        return (
          <Card className="bg-dark text-white" key={index}>
            <Card.Img src={projects.image} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              {/* <Card.Img src={github} href={projects.repo} alt="Project Repository" /> */}
              {/* <Card.Img src={deployed} href={project.deployedLink} alt="Deployed Webpage"/> */}
            </Card.ImgOverlay>
          </Card>
        );
      })}
    </div>
    // <ul>
    //   {numbers.map((number) =>
    //     <ListItem key={number.toString()}
    //               value={number} />
    //   )}
    // </ul>
  );
}

export default Project;