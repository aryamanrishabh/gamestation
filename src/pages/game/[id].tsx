import type { NextPage } from "next";
import LoadingScreen from "@components/LoadingScreen";

const GamePage: NextPage = () => {
  return (
    <div>
      <LoadingScreen />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  let props = { gameData: null };

  return { props };
}

export default GamePage;
