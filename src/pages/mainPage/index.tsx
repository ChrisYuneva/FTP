import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {useEffect} from "react";
import {getGames} from "../../api/getData";
import {gamesSlice} from "../../store/games/gamesSlice";
import {Alert, CircularProgress, Grid} from "@mui/material";
import {GameCard} from "../../components/gameCard";
import {ButtonArrow} from "../../components/buttonArrow";
import {formatDate} from "../../utils/formatDate";

export function MainPage() {
    const dispatch = useAppDispatch();
    const {loading, get, error} = gamesSlice.actions;
    const {isLoading, games, errorMessage} = useAppSelector(state => state.games);

    useEffect(() => {
        if(games.length === 0) {
            dispatch(loading());
            getGames()
                .then(response => dispatch(get(response)))
                .catch(err => dispatch(error(err)));
        }
    }, []);

    return (
        <Grid container sx={{backgroundColor: '#111', color: '#FFFFFF', padding: '24px 72px', minHeight: '100vh'}}
              spacing={{xs: 2, md: 4}}
              columns={{xs: 4, sm: 8, md: 12}}
              display={"flex"} justifyContent={"center"}>
            {isLoading && (
                <CircularProgress sx={{marginTop: "40vh", color: '#8DFD1B'}} size="100px"/>
            )}
            {
                games.map((el) =>
                    <GameCard key={el.id} title={el.title} date={formatDate(el.release_date)} genre={el.genre}
                              publisher={el.publisher} img={el.thumbnail}></GameCard>
                )
            }
            <ButtonArrow></ButtonArrow>
            {
                errorMessage && <Alert severity="error">{errorMessage}</Alert>
            }
        </Grid>
    )
}