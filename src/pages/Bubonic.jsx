import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import imageBubonic from "../assets/bubonic.png";
import { Skip } from "../components/Skip";

export const Bubonic = () => {
    const [text, setText] = useState("");
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const originalText = "The bubonic plague, which killed an estimated 75-200 million people in Eurasia during the 14th century, was one of the deadliest pandemics in history. The situation was so severe that it almost exterminated humanity. However, we have learned a great deal from this tragedy and have taken steps to avoid similar situations in the future.";
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
                        <img src={imageBubonic} />
                    </Grid>
                    <Grid item xs={4}>
                        <h1>Bubonic catastrophe</h1>
                        <p>{text}</p>
                        {showArrow && <Skip page={"/atomicBomb"} />}
                    </Grid>
                </Grid>
            </motion.Container>
        </>
    );
};