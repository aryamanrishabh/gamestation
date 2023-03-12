import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LoadingScreen from "@components/LoadingScreen";
import GameController from "@components/GameController";

import { useAppDispatch } from "@hooks/reduxHooks";
import { addGameData } from "@redux/slices/gameSlice";

import { urls } from "@urls";
import axiosInstance from "@axiosInstance";
import { GameData } from "@declarations/GameData";
import { IN_PROGRESS } from "@constants/gameStates";

interface GamePageProps {
  gameData: GameData | null;
}

const GamePage: NextPage<GamePageProps> = ({ gameData }) => {
  const dispatch = useAppDispatch();
  const gameId = useSelector((state: any) => state.game?.id);

  const [gameStarted, setGameStarted] = useState(
    gameData?.gameStatus === IN_PROGRESS
  );

  console.log(gameData, "data");

  useEffect(() => {
    if (!!gameData) dispatch(addGameData(gameData));
  }, [gameData]);

  const startGame = async () => {
    if (!gameId || !gameData?.ownerPlayerId) return;

    try {
      await axiosInstance.put(`${urls.getGameDetails}/${gameId}/start`, null, {
        headers: { "X-PLAYER-ID": gameData?.ownerPlayerId },
      });
      setGameStarted(true);
    } catch (error) {
      console.log("Error in starting game", error);
    }
  };

  if (!gameStarted) {
    return <LoadingScreen startGame={startGame} />;
  }

  return <GameController gameData={gameData} />;
};

export async function getServerSideProps(context: any) {
  let props = { gameData: null };

  try {
    const { id } = context.params || {};

    if (!!id) {
      const res = await axiosInstance.get(`${urls.getGameDetails}/${id}`);
      props.gameData = res.data;
    }
  } catch (err) {
    console.log("Error in fetching game details:", err);
  }

  return { props };
}

export default GamePage;
