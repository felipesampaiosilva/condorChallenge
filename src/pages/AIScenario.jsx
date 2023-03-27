import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background.png";
import { Skip } from "../components/Skip";

export const AIScenario = () => {
    const [text, setText] = useState("");
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const originalText = "It is crucial to recognize the possibility of AI becoming an existential threat to society in the future due to the current absence of regulations and secure practices for ensuring the security of AI development. Furthermore, the threat posed by AI may escalate at a rapid pace, as an AI can cause significant changes in a matter of seconds, unlike any other scenario discussed earlier.";
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setText(originalText.substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === originalText.length){
                clearInterval(intervalId);
                setShowArrow(true);
            }
        }, 20);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <motion.Container initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
            <Grid container justifyContent="center" mt={15} spacing={3}>
                <Grid item xs={5}>
                    <img src={backgroundImage} />
                </Grid>
                <Grid item xs={4}>
                    <h1>AI SCENARIO</h1>
                    <p>{text}</p>
                    {showArrow && <Skip page={"/problem"} />}
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};
