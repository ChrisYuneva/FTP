import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {useEffect, useState} from "react";
import {getGames, getGamesByTag} from "../../api/getData";
import {gamesSlice} from "../../store/games/gamesSlice";
import {Alert, Grid, Typography} from "@mui/material";
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
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {ChipMultiSelect} from "../../components/chipMultiSelect";
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
    const [reset, setReset] = useState(false);

    function changeFilter(filterName: string, value: string) {
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

    function resetFilters() {
        setFilter({
            platform: "",
            category: "",
            "sort-by": ""
        });
        setReset((prevState) => !prevState);
        getGamesList();
    }

    useEffect(() => {
        if (games.length === 0) {
            getGamesList();
        }
    }, []);

    useEffect(() => {
        if (filter.platform !== '' || filter.category !== '' || filter["sort-by"] !== '') {
            if (filter.category?.includes('.')) {
                getGamesListByFilter(filter);
            } else {
                getGamesList(filter);
            }
        }
    }, [filter]);

    return (
        <Grid container flexDirection="column" gap="16px" sx={{maxWidth: "80%"}}>
            {isLoading
                ? <Loading isLoading={isLoading}/>
                : !errorMessage && <>
                <>
                    <Typography
                        gutterBottom
                        variant="h4"
                        sx={{color: "#E7E7E7"}}
                        textAlign="center"
                    >
                        Filter by
                    </Typography>
                    <Grid container display="flex" justifyContent="space-between">

                        <CustomFilter
                            label='Platform'
                            options={platforms}
                            reset={reset}
                            setValue={(newValue) => changeFilter('platform', newValue)}
                        />
                        <ChipMultiSelect
                            label="Categories"
                            options={categories}
                            reset={reset}
                            setValue={(newValue) => changeFilter('category', newValue)}
                        />
                    </Grid>
                    <Grid item>
                        <Typography
                            gutterBottom
                            variant="h4"
                            sx={{color: "#E7E7E7"}}
                            textAlign="center"
                        >
                            Sort by
                        </Typography>
                        <Grid container display="flex" justifyContent="space-around">
                            <ButtonCustom
                                text="Release date"
                                arrow={false}
                                active={filter["sort-by"] === 'release-date'}
                                onClick={() => changeFilter('sort-by', 'release-date')}
                            >
                                <CalendarMonthIcon
                                    sx={{
                                        color: "#8DFD1B",
                                        marginRight: "5px",
                                    }}
                                />
                            </ButtonCustom>
                            <ButtonCustom
                                text="Alphabetise"
                                arrow={false}
                                active={filter["sort-by"] === 'alphabetical'}
                                onClick={() => changeFilter('sort-by', 'alphabetical')}
                            >
                                <AbcIcon sx={{color: '#8DFD1B', marginRight: "5px"}}/>
                            </ButtonCustom>
                            <ButtonCustom
                                text="Relevance"
                                arrow={false}
                                active={filter["sort-by"] === 'relevance'}
                                onClick={() => changeFilter('sort-by', 'relevance')}
                            >
                                <FavoriteBorderIcon sx={{color: '#8DFD1B', marginRight: "5px"}}/>
                            </ButtonCustom>
                            <ButtonCustom
                                text="Reset filters"
                                arrow={false}
                                active={false}
                                onClick={resetFilters}
                            >
                                <RestartAltIcon sx={{color: '#8DFD1B', marginRight: "5px"}}/>
                            </ButtonCustom>
                        </Grid>

                    </Grid>
                </>
                <Grid
                    container
                    sx={{color: '#FFFFFF'}}
                    justifyContent={'center'}
                    spacing={5}
                >
                    {
                        games.length
                            ? games.map((el) =>
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
                            :
                            <Typography
                                variant="h4"
                                sx={{color: "#8DFD1B", marginTop: "10%"}}
                                textAlign="center"
                            >
                                Sorry, nothing was found for these filters =(
                            </Typography>
                    }
                </Grid>
                <ButtonArrow/>
            </>
            }
            {
                errorMessage && <Alert severity="error">{errorMessage}</Alert>
            }
        </Grid>
    )
}