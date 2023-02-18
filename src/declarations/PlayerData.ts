import { CardData } from "./CardData";

export interface PlayerData {
  id: string;
  name: string;
  cards: CardData[] | null;
  active: boolean;
}
