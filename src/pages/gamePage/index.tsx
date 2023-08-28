import {useNavigate, useParams} from "react-router-dom";
import {Alert, Card, CardMedia, Grid, Typography} from "@mui/material";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {gamesSlice} from "../../store/games/gamesSlice";
import {formatDate} from "../../utils/formatDate";
import {getGameByID} from "../../api/getData";
import {Loading} from "../../components/loading";
import {ButtonCustom} from "../../components/buttonCustom";
import {CarouselImages} from "../../components/carouselImages";

export function GamePage() {
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const {loading, getById, error} = gamesSlice.actions;
    const {isLoading, gameById, errorMessage} = useAppSelector(state => state.games);

    useEffect(() => {
        dispatch(loading());
        getGameByID(id ?? '')
            .then(response => dispatch(getById(response)))
            .catch(err => dispatch(error(err)));
    }, [id]);

    return (
        <Grid container>
            {
                isLoading
                    ? <Loading isLoading={isLoading}/>
                    : <Grid item width="100%">
                        <ButtonCustom text={"Return to list"} arrow={true} onClick={() => navigate(-1)}/>
                        <Card
                            sx={{
                                boxShadow: '3px 4px 10px 0px #8DFD1B',
                                backgroundColor: '#1A1A1A',
                                color: '#FFFFFF',
                                padding: '16px',
                                border: '1px solid #8DFD1B',
                                marginTop: '24px'
                            }}
                        >
                            <Typography variant="h4" textAlign='center'>{gameById.title}</Typography>
                            <CardMedia
                                sx={{height: 350, width: '100%', backgroundSize: 'contain'}}
                                image={gameById.thumbnail}
                                title={gameById.title}
                            />
                            <Typography variant="h5">Release date: {formatDate(gameById.release_date)}</Typography>
                            <Typography variant="h5">Genre: {gameById.genre}</Typography>
                            <Typography variant="h5">Publisher: {gameById.publisher}</Typography>
                            <Typography variant="h5">Developer: {gameById.developer}</Typography>

                            <Typography component="div">
                                Minimum system requirements:
                                <ul>
                                    <li>
                                        {gameById.minimum_system_requirements?.os}
                                    </li>
                                    <li>
                                        {gameById.minimum_system_requirements?.memory}
                                    </li>
                                    <li>
                                        {gameById.minimum_system_requirements?.graphics}
                                    </li>
                                    <li>
                                        {gameById.minimum_system_requirements?.processor}
                                    </li>
                                    <li>
                                        {gameById.minimum_system_requirements?.storage}
                                    </li>
                                </ul>
                            </Typography>
                            <Typography variant="h5">Screenshots:</Typography>
                            <CarouselImages img={gameById.screenshots}/>
                        </Card>
                        {
                            errorMessage && <Alert severity="error">{errorMessage}</Alert>
                        }
                    </Grid>
            }
        </Grid>
    )
}