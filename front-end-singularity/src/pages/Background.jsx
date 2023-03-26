import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import backgroundImage from "../assets/background.png";
import { motion } from "framer-motion";

export const Background = () => {
    return (
        <>
        <motion.Container initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
            <Grid container justifyContent="center" mt={10} spacing={3}>
                <Grid item xs={5}>
                    <h1>Background</h1>
                    <p>AI's rapid advancement and prevalence in society have raised ethical and social concerns. Despite its many benefits, it is causing fear that it will replace humans in all tasks and eventually lead to the end of humanity in the coming years.</p>
                </Grid>
                <Grid item xs={5}>
                    <img src={backgroundImage} />
                    <a href="/goal">Next</a>
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};