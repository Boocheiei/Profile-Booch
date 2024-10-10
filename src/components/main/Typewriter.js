import React, { useEffect, useRef, useCallback } from 'react';

const Typewriter = () => {
  const textRef = useRef(null);
  const dataText = ["Welcome.", "Hello.", "Loading....", "My name is Booch"];

  // Typewriter function
  const typeWriter = useCallback((text, i, fnCallback) => {
    if (i < text.length) {
      textRef.current.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(() => {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700);
    }
  }, []);

  // Use useCallback to prevent unnecessary re-renders
  const startTextAnimation = useCallback((i) => {
    if (typeof dataText[i] === 'undefined') {
      setTimeout(() => {
        startTextAnimation(0);
      }, 20000);
    } else if (i < dataText.length) {
      typeWriter(dataText[i], 0, () => {
        startTextAnimation(i + 1);
      });
    }
  }, [dataText, typeWriter]);

  // Effect to start animation on mount
  useEffect(() => {
    startTextAnimation(0);
  }, [startTextAnimation]);

  return (
    <h1 ref={textRef} aria-label="Typewriter Animation">Loading...</h1>
  );
};

export default Typewriter;
