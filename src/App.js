import React from 'react';
import { Frame, addPropertyControls, ControlType } from 'framer';
import { Jump } from './Test';

const App = () => {
  const str = Array.from("Hello world");

  const containerVariants = {
     before: {},
     after: { transition: { staggerChildren: 0.05  } },
  };   

  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "string",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "string",
        damping: 16,
        stiffness: 200,
      },
    },
  };

  
  return (
    <div>
     <Jump/>  
      <Frame
      size={"100%"}
      background={ "rgba(111, 111, 111, 0.5)" }>
        <Frame
        center={"y"}
        height={26}
        width={"100%"}
        background={""}
        style={{
            fontFamily: "Montserrat, Work Sans, sans-serif",
            fontWeight: "bold",
            letterSpacing: "-0.04em",
            fontSize: 26,
            color: "#000",
            display: "flex",
            justifyContent: "center",
        }}
        variants={containerVariants}
        initial={"before"}
        animate={"after"}>
      
          {str.map((letter, i) => (
            <Frame key={i}
              width={"auto"}
              height={26}
              background={""}
              variants={letterVariants}
              style={{ position: "relative" }}>
                { letter === " " ? "\u00A0" : letter }
            </Frame>
          ))}
      </Frame>
    </Frame>
    </div>
  );
}

export default App;
