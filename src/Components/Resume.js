import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}
            <p> GPAX: {education.gpa}</p>
          </p>
          
        </div>
      );
    });

    const internship= this.props.data.internship.map(function (internship) {
      return (
        <div key={internship.company}>
          <h3>{internship.company}</h3>
          <p className="info">
            {internship.title}
            <span>&bull;</span> <em className="date">{internship.years}</em>
          </p>
          <p>{internship.description}</p>
        </div>
      );
    });

    const experience= this.props.data.experience.map(function (experience) {
      return (
        <div key={experience.competition}>
          <h3>{experience.competition}</h3>
          <p className="info">
            {experience.award}
            <span>&bull;</span> <em className="date">{experience.years}</em>
          </p>
          <p>{experience.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      return (
        <li key={skills.name}>
          <em>{skills.name}</em>
        </li>
      );
    });

    const interest = this.props.data.interest.map((interest) => {
      return (
        <li key={interest.name}>
          <em>{interest.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={2000}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={2000}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>internship</span>
              </h1>
            </div>
            <div className="nine columns main-col">{internship}</div>
          </div>
        </Slide>

        <Slide left duration={2000}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>experience</span>
              </h1>
            </div>
            <div className="nine columns main-col">{experience}</div>
          </div>
        </Slide>

        <Slide left duration={2000}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Interested</span>
              </h1>
            </div>
            <div className="nine columns main-col">{interest}</div>
          </div>
        </Slide>

        <Slide left duration={2000}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">{skills}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
