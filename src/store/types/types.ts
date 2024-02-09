import {GameType, GameTypeById} from "../../api/types/gameType";

export type InitialTypeGame = {
    games: GameType[],
    isLoading: boolean,
    errorMessage: string,
    currentPage: number
}

export type InitialTypeGameById = {
    gameById: GameTypeById[],
    isLoading: boolean,
    errorMessage: string
}