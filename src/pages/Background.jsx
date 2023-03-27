import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import backgroundImage from "../assets/background.png";
import { motion } from "framer-motion";
import { Skip } from "../components/Skip";
import { useEffect, useState } from "react";

export const Background = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const originalText = "It is essential to acknowledge the potential for AI to become an existential risk to society in the absence of secure regulations and practices for ensuring the security of AI development. Two major global catastrophes were previously used to highlight the severity of such a threat. Additionally, the danger of AI is compounded by its ability to cause significant changes in mere seconds, making it a unique scenario that requires urgent attention.";
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
            <Grid container justifyContent="center" mt={15} spacing={3}>
                <Grid item xs={5}>
                    <h1>Background</h1>
                    <p>{text}</p>
                    <Skip page={"/goal"} />
                </Grid>
                <Grid item xs={4}>
                    <img src={backgroundImage} />
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};