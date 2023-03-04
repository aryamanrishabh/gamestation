import axiosInstance from "@axiosInstance";
import { GameData } from "@declarations/GameData";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { urls } from "@urls";
import { logger } from "@utils/helpers";

interface GameState {
  id: string | null;
  data: GameData | null;
  error: any | null;
  loading: boolean;
}

interface GamePayload {
  playerName: string;
}

const initialState: GameState = {
  id: null,
  data: null,
  error: null,
  loading: false,
};

export const createGame = createAsyncThunk(
  "game/create",
  async (payload: GamePayload) => {
    const res = await axiosInstance.post(urls.createGame, {
      ...payload,
      gameType: "PRIVATE",
      turnTimeout: 30,
    });
    return res.data;
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addGameData(state, action: PayloadAction<GameData>) {
      state.data = action.payload;
    },
    resetGameData(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createGame.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createGame.fulfilled, (state, { payload }) => {
      console.log(payload, "pp");
      if (payload === null) {
        state.data = initialState.data;
        state.loading = false;
      } else {
        state.data = payload;
        state.loading = false;

        window.location.href = `/game/${payload.id}`;
      }
    });
    builder.addCase(createGame.rejected, (state, { error }) => {
      state.data = initialState.data;
      state.error = error;
      state.loading = false;
    });
  },
});

export const { addGameData, resetGameData } = gameSlice.actions;
export default gameSlice.reducer;

// const fetchGameData = createAsyncThunk();
