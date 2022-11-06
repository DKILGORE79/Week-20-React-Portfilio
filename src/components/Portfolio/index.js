import React from "react";

import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src=""
            alt="Pro_Readme_Generator
            "
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Readme Generator</MDBCardTitle>
            <MDBCardText>
            ""
            </MDBCardText>
            <MDBBtn
              href="https://github.com/DKILGORE79/Pro_Readme_Generator"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/98043070/200177191-3c1c0a68-a24e-4e0a-b931-980185ae9401.png"
            alt="Weather"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              This website pulls data from an API to show the user the daily and
              five day forecast for any city on earth
            </MDBCardText>
            <MDBBtn
              href="https://dkilgore79.github.io/week-6-Weather-App/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src="https://user-images.githubusercontent.com/98043070/200177208-c08250b1-2a5e-4ede-8cee-9b54b7d99ce3.png"
            alt="Planner"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Day Planner</MDBCardTitle>
            <MDBCardText>
              This is a work day plan app. It has hours sections on it so when
              the user enters a description for each hour and save it the
              description will stay until erased.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/DKILGORE79/week-5-scheduler"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
{/* ============================================================================================== */}
        <MDBCard className="border border-dark">
          <MDBCardImage
            src="https://user-images.githubusercontent.com/98043070/200177789-6e15be12-946e-42c7-8b81-3994f8831351.png"
            alt="Password"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
              This app allows the user to generate a random password with
              criteria of their choosing. This app utilizes numbers, letters,
              and special characters.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/DKILGORE79/Kilgore-Random-Password-Gen"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
{/* ========================================================================================= */}
        <MDBCard className="border border-dark">
          <MDBCardImage
            src="https://user-images.githubusercontent.com/98043070/200177993-c2a5433b-f37a-461c-85d8-c0860845fb6c.png"
            alt="Trivia Quiz"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Code Quiz</MDBCardTitle>
            <MDBCardText>
              This app allows the user to generate a random password with
              criteria of their choosing. This app utilizes numbers, letters,
              and special characters.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/DKILGORE79/week_4_code_quiz"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
{/* ================================================================================================== */}
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/98043070/200177195-52a76ba0-67fd-4220-af7e-a4de71d5f5d7.png"
            alt="Weather"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Team Profile</MDBCardTitle>
            <MDBCardText>
              This website pulls data from an API to show the user the daily and
              five day forecast for any city on earth
            </MDBCardText>
            <MDBBtn
              href="https://dkilgore79.github.io/week-6-Weather-App/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      </MDBCardGroup>
    </MDBContainer>
  );
};


export default Projects;