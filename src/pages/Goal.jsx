import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import goalImage from "../assets/goal.png";
import { motion } from "framer-motion";
import { Skip } from "../components/Skip";
import { useState, useEffect } from "react";

export const Goal = () => {
    const [text, setText] = useState("");
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const originalText = "The solution involves utilizing Blockchain technology to create a secure and reliable system for storing AI-related data. By using smart contracts and pre-determined societal rules, we can prevent an existential disaster.";
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setText(originalText.substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === originalText.length) {
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
                    <img src={goalImage} />
                </Grid>
                <Grid item xs={4}>
                    <h1>Our goal</h1>
                    <p>{text}</p>
                    {showArrow && <Skip page={"/next"} />}
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};