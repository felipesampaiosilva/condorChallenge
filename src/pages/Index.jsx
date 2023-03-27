import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

export const Index = () => {
    return (
        <>
            <motion.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
                <Grid container justifyContent="center" mt={25}>
                    <Grid item xs={6}>
                        <h1>THE END OF HUMANITY</h1>
                        <a href="/bubonic">
                        <Button sx={{ backgroundColor: "black", "&:hover": { backgroundColor: "#333333" } }}  variant="contained" disableElevation>Start</Button>
                        </a>
                    </Grid>
                </Grid>
            </motion.Container>
        </>
    );
};