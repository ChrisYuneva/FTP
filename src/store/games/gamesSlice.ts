import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialType} from "../types/types";
import {GameType, GameTypeById} from "../../api/types/gameType";
import {initialValueGame} from "./functions";

const initialState: InitialType = {
    games: [],
    gameById: [],
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
        getById(state, action: PayloadAction<GameTypeById>) {
            if (state.gameById.filter(el => el.id === action.payload.id).length === 0) {
                state.gameById = [...state.gameById, action.payload];
            }
            state.isLoading = false;
        },
        error(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
            state.isLoading = false;
        }
    }
})