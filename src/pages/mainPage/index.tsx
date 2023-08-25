import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {useEffect} from "react";
import {getGames} from "../../api/getData";
import {gamesSlice} from "../../store/games/gamesSlice";
import {Alert, Grid} from "@mui/material";
import {GameCard} from "../../components/gameCard";
import {ButtonArrow} from "../../components/buttonArrow";
import {formatDate} from "../../utils/formatDate";
import CustomFilter from "../../components/customFilter";
import {Loading} from "../../components/loading";

export function MainPage() {
    const dispatch = useAppDispatch();
    const {loading, get, error} = gamesSlice.actions;
    const {isLoading, games, errorMessage} = useAppSelector(state => state.games);

    useEffect(() => {
        if (games.length === 0) {
            dispatch(loading());
            getGames()
                .then(response => dispatch(get(response)))
                .catch(err => dispatch(error(err)));
        }
    }, []);

    return (
        <Grid container sx={{ padding: '16px 0px'}} flexDirection="column" gap="16px">
            {isLoading
                ? <Loading isLoading={ isLoading } />
                : <>
                    <CustomFilter />
                    <Grid
                        container
                        sx={{ color: '#FFFFFF', minHeight: '100vh' }}
                        justifyContent={'center'}
                        spacing={5}
                    >
                        {
                            games.map((el) =>
                                <GameCard
                                    key={el.id}
                                    id={el.id}
                                    title={el.title}
                                    date={formatDate(el.release_date)}
                                    genre={el.genre}
                                    publisher={el.publisher}
                                    img={el.thumbnail}
                                />
                            )
                        }
                        <ButtonArrow />
                        {
                            errorMessage && <Alert severity="error">{errorMessage}</Alert>
                        }
                    </Grid>
                </>
            }
        </Grid>
    )
}