import { Grid } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export const Skip = (props) => {
    const { page } = props;

    return (
        <Grid container direction="row" justifyContent="flex-start">
            <a href={page}><TrendingFlatIcon sx={{ color: "black" }} fontSize="large" /></a>
        </Grid>
    );
};