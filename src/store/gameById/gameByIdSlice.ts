import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialTypeGameById } from "../types/types";
import { GameTypeById } from "../../api/types/gameType";

const initialState: InitialTypeGameById = {
    gameById: [],
    isLoading: false,
    errorMessage: ''
}

export const gameByIdSlice = createSlice({
    name: 'gameById',
    initialState,
    reducers: {
        loading(state) {
            state.isLoading = true;
        },
        getGameById(state, action?: PayloadAction<GameTypeById>) {
            if (action?.payload) {
                if (state.gameById.filter(el => el.id === action.payload.id).length === 0) {
                    state.gameById = [...state.gameById, action.payload];
                }
            }
            state.isLoading = false;
        },
        error(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
            state.isLoading = false;
        }
    }
})