import React from "react";
import Card from 'react-bootstrap/Card';
import github from "../../assets/images/GitHub-Mark-32px.png";
import deployed from "../../assets/images/website-icon.png";
import projectsData from "../../assets/data/projectsData.json";
import weatherReport from '../../assets/images/weather-report-screenshot.PNG';
import horiseon from '../../assets/images/horiseon-screenshot-1200.PNG';
import noteTaker from '../../assets/images/note taker demo.gif';
import orbitalOdyssey from '../../assets/images/planetscreenshot.png';
import workDay from '../../assets/images/work-day-scheduler-page.PNG';
import codeMania from '../../assets/images/code-mania-start-page-screenshot.PNG';


// In our return method, we use the map method to return a new card for each project
function Project() {

  const { projects } = projectsData

  // render project image
  function DisplayProject(project) {

    const eachProject = Object.values(project);
    const thisProject = eachProject[0];

    switch (thisProject) {
      case "Weather Report":
        return <Card.Img className="project-img" src={weatherReport} alt="Weather Dashboard Project" />;
      case "Orbital Odyssey":
        return <Card.Img className="project-img" src={orbitalOdyssey} alt="Orbital Odyssey Project" />;
      case "Note Taker":
        return <Card.Img className="project-img" src={noteTaker} alt="Note Taker Project" />;
      case "Work Day Scheduler":
        return <Card.Img className="project-img" src={workDay} alt="Work Day Scheduler Project" />;
      case "Code Mania":
        return <Card.Img className="project-img" src={codeMania} alt="Coding Quiz Project" />;
      case "Horiseon Refactor":
        return <Card.Img className="project-img" src={horiseon} alt="Horiseon Refactor Project" />;
    }
  }

  // for each project return a card 
  return (
    <div className="projects-container row row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-xs-auto g-4 mb-2 justify-content-around">
      {projects.map((project, index) => {
        return (
          <Card className="bg-dark text-white col project-card" key={index}>
            <DisplayProject project={project.title} />
            <Card.ImgOverlay className="img-overlay">
              <Card.Title className="project-title">{project.title}</Card.Title>
              <Card.Text className="project-description">
                {project.description}
              </Card.Text>
              <div className="project-link-container">
                <a href={project.repo}><Card.Img className="project-links" src={github} alt="Project Repository" /></a>
              <a href={project.deployedLink}><Card.Img className="project-links" src={deployed}  alt="Deployed Webpage"/></a>
              </div>
            </Card.ImgOverlay> 
          </Card>
        );
      })}
    </div>
  );
}

export default Project;