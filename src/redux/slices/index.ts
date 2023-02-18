import { combineReducers } from "redux";
import gameSlice from "./gameSlice";
import playerSlice from "./playerSlice";

const rootReducer = combineReducers({
  game: gameSlice,
  player: playerSlice,
});

export default rootReducer;
