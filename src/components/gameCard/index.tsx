import { Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

type GameCardProps = {
    title: string,
    date: string,
    img: string,
    genre: string,
    publisher: string,
}

export function GameCard({ title, date, publisher, genre, img}: GameCardProps) {

    return (
        <Grid item xs={4} alignItems='stretch'>
            <Card sx={{height: '100%', boxShadow: '3px 4px 10px 0px #8DFD1B'}}>
                <CardMedia
                    sx={{height: 140, backgroundSize: 'contain'}}
                    image={img}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {publisher}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {genre}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}