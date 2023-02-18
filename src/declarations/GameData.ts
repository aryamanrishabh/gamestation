import { CardData } from "./CardData";
import { PlayerData } from "./PlayerData";

export interface GameData {
  createdAt: number;
  updatedAt: number;
  id: string;
  gameType: string;
  players: PlayerData[];
  cardDeck: CardData[];
  discardDeck: CardData[];
  flowType: string;
  gameStatus: string;
  currentTurnPlayerId: string | null;
  currentCard: any;
  turnTimeout: number;
  winnerPlayerId: string | null;
}
