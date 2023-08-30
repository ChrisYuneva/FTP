import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialTypeGame } from "../types/types";
import { GameType } from "../../api/types/gameType";

const initialState: InitialTypeGame = {
    games: [],
    isLoading: false,
    errorMessage: ''
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true;
        },
        get(state, action: PayloadAction<GameType[]>) {
            state.games = action.payload;
            state.isLoading = false;
        },
        error(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
            state.isLoading = false;
        }
    }
})