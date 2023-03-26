import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import problemImage from "../assets/problem.png";
import { motion } from "framer-motion";

export const Problem = () => {
    return (
        <>
        <motion.Container initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
            <Grid container justifyContent="center" mt={10} spacing={3}>
                <Grid item xs={5}>
                    <img src={problemImage} />
                </Grid>
                <Grid item xs={5}>
                    <h1>Policies for slowing down progress towards artificial general intelligence case</h1>
                    <p>The world is currently experiencing a domination by AI, and there is a growing concern that this may lead to the end of humanity. The resulting chaos has created a pressing need for a decisive solution to address this grave situation.</p>
                    <a href="/background">Next</a>
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};