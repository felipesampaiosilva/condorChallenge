import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import problemImage from "../assets/problem.png";
import { motion } from "framer-motion";
import { Skip } from "../components/Skip";
import { useEffect, useState } from "react";

export const Problem = () => {
    const [text, setText] = useState("");
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const originalText = "The world is currently experiencing a domination by AI, and there is a growing concern that this may lead to the end of humanity. The resulting chaos has created a pressing need for a decisive solution to address this grave situation.";
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
                    <img src={problemImage} />
                </Grid>
                <Grid item xs={4}>
                    <h1>Policies for slowing down progress towards artificial general intelligence case</h1>
                    <p>{text}</p>
                    {showArrow && <Skip page={"/about"} />}
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};