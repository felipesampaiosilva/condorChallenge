import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

export const Next = () => {
    return (
        <>
        <motion.Container initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
            <Grid container justifyContent="center" mt={20}>
                <Grid item xs={6}>
                    <h1>What happens next</h1>
                    <p>How can we prevent an existential risk to humanity due to AI's dominance? Is there a solution to this problem, and what would the future look like? <a href="www.youtube.com">See more</a> </p>
                </Grid>
            </Grid>
        </motion.Container>
        </>
    );
};