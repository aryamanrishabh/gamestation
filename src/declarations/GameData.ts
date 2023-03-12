import { CardData } from "./CardData";
import { PlayerData } from "./PlayerData";

export interface GameData {
  id: string;
  currentCard: any;
  gameType: string;
  flowType: string;
  createdAt: number;
  updatedAt: number;
  gameStatus: string;
  turnTimeout: number;
  cardDeck: CardData[];
  players: PlayerData[];
  discardDeck: CardData[];
  ownerPlayerId: string | null;
  winnerPlayerId: string | null;
  currentTurnPlayerId: string | null;
}
