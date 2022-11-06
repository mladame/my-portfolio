import React from "react";
import Card from 'react-bootstrap/Card';
// import github from "../../assets/images/GitHub-Mark-32px.png";
import projectsData from "../../assets/data/projectsData.json";


// In our return method, we use the map method to return a new array 
function Project() {

  const {projects} = projectsData

  // for each project return a card 
  return (
    <div className="projects-container row row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-xs-auto g-4 mb-2 justify-content-around">
      {projects.map((project, index) => {
        return (
          <Card className="bg-dark text-white col project-card" key={index}>
            <Card.Img src={projects.image} alt="Martha Adame's Project" />
            <Card.ImgOverlay className="img-overlay">
              <Card.Title className="project-title">{project.title}</Card.Title>
              <Card.Text className="project-description">
                {project.description}
              </Card.Text>
              {/* <Card.Img className="project-links" src={github} href={projects.repo} alt="Project Repository" /> */}
              {/* <Card.Img className="project-links" src={deployed} href={project.deployedLink} alt="Deployed Webpage"/> */}
            </Card.ImgOverlay>
          </Card>
        );
      })}
    </div>
  );
}

export default Project;