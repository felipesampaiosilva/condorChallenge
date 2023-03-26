import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Next = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const originalText = "How can we prevent an existential risk to humanity due to AI's dominance? Is there a solution to this problem, and what would the future look like? See more";
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
            <Grid container justifyContent="center" mt={20}>
                <Grid item xs={6}>
                    <h1>What happens next</h1>
                    <p>{text}</p>
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};