import React, { useRef, useState, useEffect } from 'react';
import '../../assets/css/profilecard.scss';

const Card = ({ dataImage, header, content }) => {
  const cardRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, [cardRef]);

  const handleMouseMove = (e) => {
    const cardRect = cardRef.current.getBoundingClientRect();
    setMouseX(e.clientX - cardRect.left - width / 2);
    setMouseY(e.clientY - cardRect.top - height / 2);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
  };

  const rX = (mouseX / width) * 30;
  const rY = (mouseY / height) * -30;

  const cardStyle = {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
  };

  const tX = (mouseX / width) * -40;
  const tY = (mouseY / height) * -40;

  const cardBgTransform = {
    transform: `translateX(${tX}px) translateY(${tY}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
        <div className="card-info">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;