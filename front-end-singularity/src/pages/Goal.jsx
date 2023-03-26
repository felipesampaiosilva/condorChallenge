import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import goalImage from "../assets/goal.png";
import { motion } from "framer-motion";

export const Goal = () => {
    return (
        <>
        <motion.Container initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
            <Grid container justifyContent="center" mt={10} spacing={3}>
                <Grid item xs={5}>
                    <img src={goalImage} />
                </Grid>
                <Grid item xs={5}>
                    <h1>Our goal</h1>
                    <p>The solution involves utilizing Blockchain technology to create a secure and reliable system for storing AI-related data. By using smart contracts and pre-determined societal rules, we can prevent an inevitable disaster.</p>
                    <a href="/next">Next</a>
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};