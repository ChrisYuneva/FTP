import { useNavigate, useParams } from "react-router-dom";
import { Alert, Card, CardMedia, Grid, List, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";
import { gameByIdSlice } from "../../store/gameById/gameByIdSlice";
import { formatDate } from "../../utils/formatDate";
import { getGameByID } from "../../api/getData";
import { Loading } from "../../components/loading";
import { ButtonCustom } from "../../components/buttonCustom";
import { CarouselImages } from "../../components/carouselImages";
import { GameMinRequirements } from "../../components/gameMinRequirements";
import { GameDescription } from "../../components/gameDescription";

const TIME_TO_CLEAR_LS = 1000 * 60 * 5;

export function GamePage() {
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const { loading, getGameById, error } = gameByIdSlice.actions;
    const { isLoading, gameById, errorMessage } = useAppSelector(state => state.gamesById);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(async () => {
            localStorage.removeItem('persist:root');
        }, TIME_TO_CLEAR_LS);
    }, []);

    useEffect(() => {
        if (gameById.filter(el => el.id === Number(id)).length === 0) {
            dispatch(loading());
            getGameByID(id ?? '')
                .then(response => dispatch(getGameById(response)))
                .catch(err => dispatch(error(err)));
        }
    }, [id]);

    return (
        <Grid container sx={{maxWidth: "80%"}}>
            {
                isLoading
                    ? <Loading isLoading={ isLoading }/>
                    : !errorMessage &&
                    <Grid item width="100%">
                        <ButtonCustom
                            text={"Return to list"}
                            arrow={true}
                            active={false}
                            onClick={() => navigate(-1)}
                        />
                        {
                            gameById.find(el => el.id === Number(id))
                                ? <Card
                                    sx={{
                                        boxShadow: '3px 4px 10px 0px #8DFD1B',
                                        backgroundColor: '#1A1A1A',
                                        color: '#FFFFFF',
                                        padding: '16px 24px',
                                        border: '1px solid #8DFD1B',
                                        marginTop: '24px'
                                    }}
                                >
                                    {
                                        gameById.map(el => {
                                                if (el.id === Number(id)) {
                                                    return <div key={el.id}>
                                                        <Typography
                                                            variant="h4"
                                                            textAlign="center"
                                                            gutterBottom
                                                        >
                                                            {el.title}
                                                        </Typography>
                                                        <CardMedia
                                                            sx={{height: 350, width: '100%', backgroundSize: 'contain'}}
                                                            image={el.thumbnail}
                                                            title={el.title}
                                                        />
                                                            <Grid container marginTop="16px">
                                                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                                    <List sx={{color: "white"}}>
                                                                        {
                                                                            formatDate(el.release_date) !== "Invalid Date" &&
                                                                            <>
                                                                                <GameDescription title="Release date: "
                                                                                                 value={el.release_date} isDate={true}/>
                                                                            </>
                                                                        }
                                                                        <GameDescription title="Genre: " value={el.genre}/>
                                                                        <GameDescription title="Publisher: "
                                                                                         value={el.publisher}/>
                                                                        <GameDescription title="Developer: "
                                                                                         value={el.developer}/>
                                                                    </List>
                                                                </Grid>
                                                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                                    {
                                                                        el.minimum_system_requirements && el.minimum_system_requirements.os &&

                                                                        <GameMinRequirements
                                                                            minRequirements={el.minimum_system_requirements}/>
                                                                    }
                                                                </Grid>
                                                            </Grid>
                                                        <CarouselImages img={el.screenshots}/>
                                                    </div>
                                                }
                                            }
                                        )
                                    }
                                </Card>
                                : <Typography color="white">Sorry, game not found =(</Typography>
                        }
                    </Grid>
            }
            {
                errorMessage &&
                <Grid item xs={12}>
                    <Alert severity="error">{ errorMessage }</Alert>
                </Grid>
            }
        </Grid>
    )
}