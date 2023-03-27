import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import aboutImage from "../assets/about.png";
import { motion } from "framer-motion";
import { Skip } from "../components/Skip";
import { useEffect, useState } from "react";

export const About = () => {
    const [text, setText] = useState("");
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const originalText = "Inteli Singularity is a group dedicated to ensuring a safe and ethical future for artificial intelligence (AI) and its interaction with humanity. Our mission is to develop innovative way to promote the safe coexistence of AI and humans, avoiding existential risks for humanity.";
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
        <motion.Container initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
            <Grid container justifyContent="center" mt={15} spacing={3}>
                <Grid item xs={5}>
                    <h1>Empowering the future through responsible AI</h1>
                    <p>{text}</p>
                    {showArrow && <Skip page={"/goal"} />}
                </Grid>
                <Grid item xs={4}>
                    <img src={aboutImage} />
                </Grid>
            </Grid>
        </motion.Container>
    )
};