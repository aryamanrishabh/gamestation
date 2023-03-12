import { FC } from "react";
import { GameData } from "@declarations/GameData";

interface GameControllerProps {
  gameData: GameData | null;
}

const GameController: FC<GameControllerProps> = ({ gameData }) => {
  return <div>GameController</div>;
};

export default GameController;
