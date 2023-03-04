import type { NextPage } from "next";
import { useEffect, useState } from "react";
import LoadingScreen from "@components/LoadingScreen";
import GameController from "@components/GameController";

import { useAppDispatch } from "@hooks/reduxHooks";
import { addGameData } from "@redux/slices/gameSlice";

import { urls } from "@urls";
import axiosInstance from "@axiosInstance";
import { GameData } from "@declarations/GameData";

interface GamePageProps {
  gameData: GameData | null;
}

const GamePage: NextPage<GamePageProps> = ({ gameData }) => {
  const dispatch = useAppDispatch();
  const [gameStarted, setGameStarted] = useState(false);

  console.log(gameData);

  useEffect(() => {
    if (!!gameData) dispatch(addGameData(gameData));
  }, [gameData]);

  if (!gameStarted) {
    return (
      <div>
        <LoadingScreen startGame={() => setGameStarted(true)} />
      </div>
    );
  }

  return <GameController />;
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
