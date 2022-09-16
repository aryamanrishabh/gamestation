import type { NextPage } from "next";

const GamePage: NextPage = () => {
  return <div>GamePage</div>;
};

export async function getServerSideProps(context: any) {
  let props = { gameData: null };

  return { props };
}

export default GamePage;
