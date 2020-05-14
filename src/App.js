import React from 'react';
import { Frame, addPropertyControls, ControlType } from 'framer';
import { motion } from 'framer-motion';

const App = () => {
  const str = Array.from("Hello");

  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  }

  const variants = {
    before: {},
    after: {
      transition: {
        staggerChildren: 0.1,
      },
    }
  }

  return (
    <Frame>
      <Frame
      variants={ variants }
      initial={ "before" }
      animate={ "after" }
      style={{ display: "flex", justifyContent: "center", fontSpacing: "-0.04rem", fontSize: 36 }}>
          { str.map((letter, index) => <Frame
                                key={ index }
                                width={ "auto" }
                                height={ 26 }
                                background={ "" }
                                style={{ position: "relative" }}
                                variants={ letterVariants }>
                          { letter }</Frame>)}
      </Frame>
    </Frame>
  );
}

export default App;
