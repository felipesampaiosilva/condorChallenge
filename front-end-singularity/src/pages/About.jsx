import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import aboutImage from "../assets/about.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const About  = () => {
    return (
        <motion.Container initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
            <Grid container justifyContent="center" mt={10} spacing={3}>
                <Grid item xs={5}>
                    <h1>Empowering the future through responsible AI</h1>
                    <p>Inteli Singularity is a group dedicated to ensuring a safe and ethical future for artificial intelligence (AI) and its interaction with humanity. Our mission is to develop innovative way to promote the safe coexistence of AI and humans, avoiding existencial risks for humanity.</p>
                </Grid>
                <Grid item xs={5}>
                    <img src={aboutImage} />
                    <a href="/problem">Next</a>
                </Grid>
            </Grid>
        </motion.Container>
    )
};