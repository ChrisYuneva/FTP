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
    const {isLoading, games, gameById, errorMessage} = useAppSelector(state => state.games);

    useEffect(() => {
        if(gameById.filter(el => el.id === Number(id)).length === 0) {
            dispatch(loading());
            getGameByID(id ?? '')
                .then(response => dispatch(getById(response)))
                .catch(err => dispatch(error(err)));
        }
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
                            {
                                gameById.map(el => {
                                    if(el.id === Number(id)) {
                                        return <>
                                            <Typography variant="h4" textAlign='center'>{el.title}</Typography>
                                            <CardMedia
                                                sx={{height: 350, width: '100%', backgroundSize: 'contain'}}
                                                image={el.thumbnail}
                                                title={el.title}
                                            />
                                            <Typography variant="h5">Release date: {formatDate(el.release_date)}</Typography>
                                            <Typography variant="h5">Genre: {el.genre}</Typography>
                                            <Typography variant="h5">Publisher: {el.publisher}</Typography>
                                            <Typography variant="h5">Developer: {el.developer}</Typography>

                                            <Typography component="div">
                                                Minimum system requirements:
                                                <ul>
                                                    <li>
                                                        {el.minimum_system_requirements?.os}
                                                    </li>
                                                    <li>
                                                        {el.minimum_system_requirements?.memory}
                                                    </li>
                                                    <li>
                                                        {el.minimum_system_requirements?.graphics}
                                                    </li>
                                                    <li>
                                                        {el.minimum_system_requirements?.processor}
                                                    </li>
                                                    <li>
                                                        {el.minimum_system_requirements?.storage}
                                                    </li>
                                                </ul>
                                            </Typography>
                                            <Typography variant="h5">Screenshots:</Typography>
                                            <CarouselImages img={el.screenshots}/>
                                        </>
                                    }
                                    return <></>
                                }

                                )
                            }

                        </Card>
                        {
                            errorMessage && <Alert severity="error">{errorMessage}</Alert>
                        }
                    </Grid>
            }
        </Grid>
    )
}