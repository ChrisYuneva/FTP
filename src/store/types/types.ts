import {GameType} from "../../api/types/gameType";

export type InitialType = {
    games: GameType[],
    isLoading: boolean,
    errorMessage: string
}