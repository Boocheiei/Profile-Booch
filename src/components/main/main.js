import '../../assets/css/main.css';
import React from 'react';
import Apptwo from './Apptwo';
import Typewriter from './Typewriter';
import '../../assets/css/cloudmain.css';
import MatrixRain from './RainEffect';


function Main() {


  return (
    <div>
      <div className="grid-main">
        <div className='grid-main-item1'>
          <Typewriter />
          <h2 class="header">Pure CSS Gradient Text Animation Effect</h2>
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