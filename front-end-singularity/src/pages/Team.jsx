import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import pedro from "../assets/pedro.png";
import luiz from "../assets/luiz.png";
import sergio from "../assets/sergio.png";
import caio from "../assets/caio.png";
import rodrigo from "../assets/rodrigo.png";
import felipe from "../assets/felipe.png";

export const Team = () => {
    return (
        <Container >
            <h1>Meet our team</h1>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                <Card sx={{ width: 250}}>
                            <CardMedia component="img" height="140" image={pedro}/>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    <a className="nameLink" href="https://www.linkedin.com/in/pedro-silva-14343022a/">Pedro Silva</a>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ width: 250 }}>
                            <CardMedia component="img" height="140" image={luiz}/>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                <a className="nameLink" href="https://www.linkedin.com/in/luizcarlospsj20/">Luiz Carlos</a>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ width: 250 }}>
                            <CardMedia component="img" height="140" image={rodrigo}/>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                <a className="nameLink" href="https://www.linkedin.com/in/rodrigo-moraes-martins-/">Rodrigo Martins</a>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ width: 250 }}>
                            <CardMedia component="img" height="140" image={sergio}/>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                <a className="nameLink" href="https://www.linkedin.com/in/felipe-sampaio-silva/">Felipe Sampaio</a>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ width: 250 }}>
                            <CardMedia component="img" height="140" image={felipe}/>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                <a className="nameLink" href="https://www.linkedin.com/in/sergiobalucas/">Sergio Lucas</a>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ width: 250 }}>
                            <CardMedia component="img" height="140" image={caio}/>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                <a className="nameLink" href="https://www.linkedin.com/in/caio-m1849/">Caio Martins</a>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
            </Grid>
        </Container>
    );
};