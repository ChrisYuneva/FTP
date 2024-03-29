import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { getGames, getGamesByTag } from "../../api/getData";
import { gamesSlice} from "../../store/games/gamesSlice";
import { Alert, Grid, Pagination, TextField, Typography } from "@mui/material";
import { GameCard} from "../../components/gameCard";
import { ButtonArrow} from "../../components/buttonArrow";
import { formatDate} from "../../utils/formatDate";
import CustomFilter from "../../components/customFilter";
import { Loading} from "../../components/loading";
import { GameSortByTagParams, GameSortParams } from "../../api/types/gameType";
import { categories, platforms } from "./consts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AbcIcon from "@mui/icons-material/Abc";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { ChipMultiSelect } from "../../components/chipMultiSelect";
import { ButtonCustom } from "../../components/buttonCustom";

export function MainPage() {
    const dispatch = useAppDispatch();
    const {loading, get, error, setCurrentPage} = gamesSlice.actions;
    const {isLoading, games, errorMessage, currentPage} = useAppSelector(state => state.games);
    const [renderGames, setRenderGames] = useState(games);
    const elementCount = 20;
    const [start, setStart] = useState((currentPage-1)*elementCount);
    const [end, setEnd] = useState(elementCount*currentPage);

    const [filter, setFilter] = useState<GameSortParams>({
        platform: "",
        category: "",
        "sort-by": ""
    });
    const [reset, setReset] = useState(false);
    const [search, setSearch] = useState('');

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
        setSearch('');
        getGamesList();
    }

    useEffect(() => {
        if (games.length === 0) {
            getGamesList();
        }
    }, []);

    useEffect(() => {
        setRenderGames(() => games.slice(start, elementCount));
    }, [games])

    useEffect(() => {
        if (filter.platform !== '' || filter.category !== '' || filter["sort-by"] !== '') {
            if (filter.category?.includes('.')) {
                getGamesListByFilter(filter);
            } else {
                getGamesList(filter);
            }
        }
    }, [filter]);

    function paginationChange(event: React.ChangeEvent<unknown>, value: number) {
        dispatch(setCurrentPage(value));
        setStart((value-1) * elementCount);
        setEnd(value*elementCount);
    }

    useEffect(() => {
        setRenderGames(games.slice(start, end));
    }, [currentPage]);

    return (
        <Grid container flexDirection="column" gap="16px" sx={{maxWidth: "80%"}}>
            {isLoading
                ? <Loading isLoading={ isLoading }/>
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
                    <Grid container display="flex" justifyContent="space-between" flexWrap="nowrap" gap="8px">
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
                                text="Popularity"
                                arrow={false}
                                active={filter["sort-by"] === 'popularity'}
                                onClick={() => changeFilter('sort-by', 'popularity')}
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
                        <TextField
                            label="Search game"
                            value={search}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                setSearch(event.target.value);
                            }}
                            sx={{marginTop: "16px"}}
                            fullWidth={true}
                        />
                        
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
                            ? renderGames.map((el) => {
                                if (el.title.toLowerCase().includes(search.toLowerCase())) {
                                    return <GameCard
                                        key={el.id}
                                        id={el.id}
                                        title={el.title}
                                        date={formatDate(el.release_date)}
                                        genre={el.genre}
                                        publisher={el.publisher}
                                        img={el.thumbnail}
                                    />
                                }

                                return <></>
                            })
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
                errorMessage && <Alert severity="error">{ errorMessage }</Alert>
            }
            <Pagination 
                count={Math.round(games.length/elementCount)} 
                color="primary" 
                variant="outlined" 
                page={currentPage} 
                onChange={paginationChange} 
                sx={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '16px'}}
                size="large"
                />
        </Grid>
    )
}