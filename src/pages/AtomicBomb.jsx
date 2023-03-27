import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import imageAtomic from "../assets/atomic.jpg";
import { Skip } from "../components/Skip";

export const AtomicBomb = () => {
    const [text, setText] = useState("");
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const originalText = "The atomic bombings of Hiroshima and Nagasaki killed an estimated 200,000 people, mostly civilians. The death toll included men, women, and children who were simply going about their daily lives when the bombs were dropped. The bombs caused widespread destruction, including the complete obliteration of entire neighborhoods and buildings.";
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
                    <h1>Atomic bomb</h1>
                    <p>{text}</p>
                    {showArrow && <Skip page={"/scenario"} />}
                </Grid>
                <Grid item xs={4}>
                    <img src={imageAtomic} />
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};