import { configureStore } from '@reduxjs/toolkit';
import {gamesSlice} from "./games/gamesSlice";

export const store = configureStore({
    reducer: {
        games: gamesSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;