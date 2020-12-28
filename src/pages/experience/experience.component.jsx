import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";
import {experience} from "./experience-data";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 2}}>
            {experience.map((experience,index)=>(
                <Card index={index}>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                        <Card.Img variant="top" className="img-resize" src={experience.imgSrc} alt={experience.alt} />
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                            <Card.Title className="text-center title-ex">{experience.title}</Card.Title>
                        </div>
                        <div>
                            <Card.Text className="text-center style">
                                <br />
                                <strong>Technology:</strong> {experience.technology}
                                <br />
                                <strong>Duration:</strong> {experience.duration}
                                <br/>
                                <strong> Description </strong>
                                {experience.description.map((desc,index)=>(
                                    <ul className="text-left">
                                        <li><strong>{desc.Bold} </strong>{desc.text}</li>

                                    </ul>
                                ))}
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            ))}
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
