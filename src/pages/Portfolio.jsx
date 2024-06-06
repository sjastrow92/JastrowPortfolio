import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

import jeansPic from "../assets/jeans.png";

export default function Portfolio() {
  const [buttonVariant] = useState("primary");
  return (
    <div>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={jeansPic} />
            <Card.Body>
              <Card.Title>JEANS</Card.Title>
              <Card.Text>
                A front end application that uses two server side APIs. This
                application is for developer and designers alike who may
                need assitance finding color schemes and image themes to
                conceptualize their project.
              </Card.Text>
              <Button
                variant={buttonVariant}
                href="https://frenzie24.github.io/jeans/"
              >
                Deployed Application
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Bucket</Card.Title>
              <Card.Text>Description of Project 2</Card.Text>
              <Button variant="primary">Deployed Application</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Personal Blog</Card.Title>
              <Card.Text>Description of Project 3</Card.Text>
              <Button variant="primary">Deployed Application</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Steve's Thought Factory</Card.Title>
              <Card.Text>
                A back end applicaiton using NoSQL to build an API for a social
                network web application where users can share their thoughts,
                react to friends’ thoughts, and create a friend list. I used
                Express.js for routing, a MongoDB database, and the Mongoose
                ODM.
              </Card.Text>
              <Button variant="primary">Deployed Application</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Task Board</Card.Title>
              <Card.Text>Description of Project 5</Card.Text>
              <Button variant="primary">Deployed Application</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Project 6</Card.Title>
              <Card.Text>Description of Project 6</Card.Text>
              <Button variant="primary">Deployed Application</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
