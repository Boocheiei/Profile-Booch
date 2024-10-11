import '../../assets/css/main.css';
import React from 'react';
import Apptwo from './Apptwo';
import Typewriter from './Typewriter';
import '../../assets/css/cloudmain.css';
import MatrixRain from './RainEffect';
import Card from '../profile/profilecard';
import image from '../../assets/img/profile.jpg';

function Main() {


  return (
    <div>
      <div className="grid-main">
        <div className='grid-main-item1'>
          <div className='grid-profile'>
            <div id="app" className="containercard">
              <Card 
              dataImage={image}
                header="Booch"
                content="I'm a web development specialist with a passion for DevOps and a year of experience in creating and optimizing dynamic webpages, focusing on enhancing user experience and delivering high-quality results."
              />
            </div>
            <div>
              <br />
              <Typewriter />
              <h2 class="header"> I'm a dynamic and results-
                driven specialist with a strong
                background in dynamic web
                development and a genuine
                passion for DevOps. Over the past
                year, I've honed my skills in
                creating and optimizing dynamic
                webpages that enhance user
                experience and streamline
                processes. I truly enjoy
                collaborating with others and
                thrive in team environments,
                always striving to deliver high-
                quality results that not only meet
                but exceed expectations.</h2>
            </div>
          </div>
          <div>
            <div className='icondev'>
              <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" width="36" height="36" alt="C" />
              </a>
              <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg" width="36" height="36" alt="C++" />
              </a>
              <a href="https://docs.microsoft.com/en-us/dotnet/csharp/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" width="36" height="36" alt="C#" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />
              </a>
              <a href="https://code.visualstudio.com/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" width="36" height="36" alt="VS Code" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" />
              </a>
              <a href="https://reactjs.org/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" />
              </a>
              <a href="https://www.w3.org/TR/CSS/#css">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" />
              </a>
              <a href="https://getbootstrap.com/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" />
              </a>
              <a href="https://nodejs.org/en/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" />
              </a>
              <a href="https://www.mysql.com/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" />
              </a>
              <a href="https://firebase.google.com/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" />
              </a>
              <a href="https://wordpress.com">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/wordpress-colored.svg" width="36" height="36" alt="Wordpress" />
              </a>
              <a href="https://dotnet.microsoft.com/en-us/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg" width="36" height="36" alt=".NET" />
              </a>
              <a href="https://store.arduino.cc/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg" width="36" height="36" alt="Arduino" />
              </a>
              <a href="https://www.docker.com/">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="36" height="36" alt="Docker" />
              </a>
            </div>
          </div>
        </div>
        <div><Apptwo />
        </div>
      </div>
      <div>
        <MatrixRain />
      </div>
    </div>
  );
}
export default Main;