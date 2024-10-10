import React, { useEffect } from 'react';

const MatrixRain = () => {
  const randomText = () => {
    const text = "{}[]();<>";
    return text[Math.floor(Math.random() * text.length)];
  };

  const rain = () => {
    const cloud = document.querySelector('.cloud');
    const e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    const left = Math.floor(Math.random() * 300);
    const size = Math.random() * 1.5;
    const duration = Math.random() * 1;

    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(() => {
      cloud.removeChild(e);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(rain, 20);
    return () => clearInterval(interval); // ทำความสะอาดเมื่อคอมโพเนนต์ถูกยกเลิก
  }, []);

  return (
    <div className='concloud'>
    <div className="containerc">
      <div className="cloud">
        <h2>Coding.........</h2>
      </div>
    </div>
    </div>
  );
};

export default MatrixRain;