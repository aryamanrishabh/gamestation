import { CardData } from "@declarations/CardData";
import { PlayerData } from "@declarations/PlayerData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  data: PlayerData | null;
}

interface PlayerDataPayload {
  name: string;
  id: string;
  cards: CardData[] | null;
  active: boolean;
}

const initialState: PlayerState = { data: null };

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addPlayerData(state, action: PayloadAction<PlayerDataPayload>) {
      state.data = action.payload;
    },
    resetPlayerData(state) {
      state = initialState;
    },
  },
});

export const { addPlayerData, resetPlayerData } = playerSlice.actions;
export default playerSlice.reducer;
