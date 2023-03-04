import { FC, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import FlexBox from "@common/FlexBox";
import Heading from "@components/common/Heading";
import CreateGameModal from "./CreateGameModal";
import JoinGameModal from "./JoinGameModal";
import { createGame } from "@redux/slices/gameSlice";
import { useAppDispatch } from "@hooks/reduxHooks";

const Wrapper = styled(FlexBox)`
  flex: 1;
  position: relative;
`;

const Container = styled(FlexBox)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 2rem;
  box-sizing: border-box;
`;

const Options = styled(Heading)`
  cursor: pointer;
`;

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const [createGameModal, setCreateGameModal] = useState(false);
  const [showJoinGameModal, setShowJoinGameModal] = useState(false);

  const [name, setName] = useState("");

  const toggleCreateGameModal = () => setCreateGameModal(!createGameModal);

  const toggleJoinGameModal = () => setShowJoinGameModal(!showJoinGameModal);

  const handleCreateGame = () => dispatch(createGame({ playerName: name }));

  return (
    <Wrapper>
      {createGameModal && (
        <CreateGameModal
          name={name}
          setName={setName}
          onSubmit={handleCreateGame}
          toggleModal={toggleCreateGameModal}
        />
      )}
      {showJoinGameModal && <JoinGameModal toggleModal={toggleJoinGameModal} />}
      <Image
        src="/images/pixel-art-bg.webp"
        layout="fill"
        alt="HomePage background"
        priority
      />
      <Container column align="center" justify="center" rowGap="4rem">
        <motion.div
          initial={{ scale: 0.6, opacity: 0, x: 10, y: -20 }}
          animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <h1 className="mono">Welcome to ONU</h1>
        </motion.div>
        <FlexBox column align="center" rowGap="1.25rem">
          <Options onClick={toggleCreateGameModal}>CREATE GAME</Options>
          <Options onClick={toggleJoinGameModal}>JOIN GAME</Options>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default Home;
