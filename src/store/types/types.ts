import {GameType, GameTypeById} from "../../api/types/gameType";

export type InitialType = {
    games: GameType[],
    gameById: GameTypeById,
    isLoading: boolean,
    errorMessage: string
}