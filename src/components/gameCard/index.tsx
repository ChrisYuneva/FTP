import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";

type GameCardProps = {
    id: number,
    title: string,
    date: string,
    img: string,
    genre: string,
    publisher: string,
}

export function GameCard({ id, title, date, publisher, genre, img }: GameCardProps) {
    const navigate = useNavigate();

    return <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card
            sx={{
                height: '100%',
                boxShadow: '2px 3px 9px 0px #8DFD1B',
                backgroundColor: '#1A1A1A',
                color: '#FFFFFF',
                cursor: 'pointer',
                border: '1px solid #8DFD1B',
                paddingTop: '24px'
            }}
            onClick={() => navigate(`/game/${id}`)}
        >
            <CardMedia
                sx={{height: 140, backgroundSize: 'contain'}}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    textAlign="center"
                    component="div"
                    sx={{color: '#FFFFFF'}}
                >
                    {title}
                </Typography>
                {
                    date !== "Invalid Date" &&
                    <Typography
                        gutterBottom
                        variant="body2"
                        display="flex"
                        alignItems="center"
                        color="text.secondary"
                        sx={{color: '#FFFFFF'}}
                    >
                        <CalendarMonthIcon sx={{ marginRight: "5px" }} />
                        {date}
                    </Typography>
                }
                <Typography
                    gutterBottom
                    variant="body2"
                    display="flex"
                    alignItems="center"
                    color="text.secondary"
                    sx={{color: '#FFFFFF'}}
                >
                    <ApartmentIcon sx={{marginRight: "5px" }} />
                    {publisher}
                </Typography>
                <Typography
                    variant="body2"
                    display="flex"
                    alignItems="center"
                    color="text.secondary"
                    sx={{color: '#FFFFFF'}}
                >
                    <ExtensionIcon sx={{marginRight: "5px" }} />
                    {genre}
                </Typography>
            </CardContent>
        </Card>
    </Grid>;
}