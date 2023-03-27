import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

export const AboutUs = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const originalText = "Holution to this problem, anakkakak";
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setText(originalText.substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === originalText.length) clearInterval(intervalId);
        }, 20);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <motion.Container initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
            <Grid container justifyContent="center" mt={25}>
                <Grid item xs={6}>
                    <h1>ABOUT US</h1>
                    <p>{text}</p>
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};