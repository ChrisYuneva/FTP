import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {useEffect, useState} from "react";
import {getGames, getGamesByTag} from "../../api/getData";
import {gamesSlice} from "../../store/games/gamesSlice";
import {Alert, Button, Grid, SelectChangeEvent, Typography} from "@mui/material";
import {GameCard} from "../../components/gameCard";
import {ButtonArrow} from "../../components/buttonArrow";
import {formatDate} from "../../utils/formatDate";
import CustomFilter from "../../components/customFilter";
import {Loading} from "../../components/loading";
import {GameSortByTagParams, GameSortParams} from "../../api/types/gameType";
import {categories, platforms} from "./consts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AbcIcon from '@mui/icons-material/Abc';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {ChipMultiSelect} from "../../components/chipMultiSelect";
import Box from "@mui/material/Box";
import {ButtonCustom} from "../../components/buttonCustom";

export function MainPage() {
    const dispatch = useAppDispatch();
    const {loading, get, error} = gamesSlice.actions;
    const {isLoading, games, errorMessage} = useAppSelector(state => state.games)

    const [filter, setFilter] = useState<GameSortParams>({
        platform: "",
        category: "",
        "sort-by": ""
    });

    function changeFilter(filterName:string, value: string) {
        setFilter({
            ...filter,
            [filterName]: value
        });
    }

    function getGamesList(params?: GameSortParams) {
        if (games.length === 0) {
            dispatch(loading());
        }
        getGames(params)
            .then(response => dispatch(get(response)))
            .catch(err => dispatch(error(err)));
    }

    function getGamesListByFilter(params: GameSortByTagParams) {
        getGamesByTag(params)
            .then(response => dispatch(get(response)))
            .catch(err => dispatch(error(err)));
    }

    useEffect(() => {
        if (games.length === 0) {
            getGamesList();
        }
    }, []);

    useEffect(() => {
        if(filter.platform !== '' || filter.category !== '' || filter["sort-by"] !== '') {
            if(filter.category?.includes('.')) {
                getGamesListByFilter(filter);
            }
            else {
                getGamesList(filter);
            }
        }
    }, [filter]);

    return (
        <Grid container flexDirection="column" gap="16px">
            {isLoading
                ? <Loading isLoading={ isLoading } />
                : <>
                    <>
                        <CustomFilter label='Platform' options={platforms} setValue={(newValue) => changeFilter('platform', newValue)}/>
                        <ChipMultiSelect label="Categories" options={categories} setValue={(newValue) => changeFilter('category', newValue)}></ChipMultiSelect>
                        <Grid item>
                            <Typography gutterBottom variant="h4" sx={{ color: "#8DFD1B" }} textAlign="center">
                                Sort by
                            </Typography>
                            <Grid container display="flex" justifyContent="space-around">
                                <ButtonCustom text={"Release date"} arrow={false} onClick={() => changeFilter('sort-by', 'release-date')}>
                                    <CalendarMonthIcon sx={{ color: "#8DFD1B", marginRight: "5px" }} />
                                </ButtonCustom>
                                <ButtonCustom text={"Alphabetise"} arrow={false} onClick={() => changeFilter('sort-by', 'alphabetical')}>
                                    <AbcIcon sx={{ color: '#8DFD1B', marginRight: "5px"}} />
                                </ButtonCustom>
                                <ButtonCustom text={"Relevance"} arrow={false} onClick={() => changeFilter('sort-by', 'relevance')}>
                                    <FavoriteBorderIcon sx={{ color: '#8DFD1B', marginRight: "5px"}} />
                                </ButtonCustom>
                            </Grid>

                        </Grid>
                    </>
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