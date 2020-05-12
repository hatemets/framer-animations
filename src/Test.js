import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function Jump() {
    // Create an array of letters
    const string = Array.from("First Line")

    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: 0.06 } },
    }

    // Variants for animating each letter
    const letterVariants = {
        before: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
        },
        after: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
        },
    }

    return (
        <Frame
            size={"100%"}
            background={
                "linear-gradient(90deg, #0599ff 0%, hsl(204, 100%, 65%) 100%)"
            }
        >
            {
                // Set the display and justifyContent properties to align the text correctly
            }
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
                    color: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                }}
                variants={containerVariants}
                initial={"before"}
                animate={"after"}
            >
                {
                    // Map through the text and only animate if the letter is not a space
                }
                {string.map((letter, index) => (
                    // Set width to "auto" in order to ensure default kerning
                    <Frame
                        key={index}
                        width={"auto"}
                        height={26}
                        background={""}
                        variants={letterVariants}
                        style={{ position: "relative" }}
                    >
                        {// Set space to a non-breaking space, or a space with a default width
                        letter === " " ? "\u00A0" : letter}
                    </Frame>
                ))}
            </Frame>
        </Frame>
    )
}

