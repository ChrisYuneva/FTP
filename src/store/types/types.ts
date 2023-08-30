import {GameType, GameTypeById} from "../../api/types/gameType";

export type InitialTypeGame = {
    games: GameType[],
    isLoading: boolean,
    errorMessage: string
}

export type InitialTypeGameById = {
    gameById: GameTypeById[],
    isLoading: boolean,
    errorMessage: string
}