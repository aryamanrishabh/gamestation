import { FC, useState } from "react";
import styled from "styled-components";
import Modal from "@components/common/Modal";
import FlexBox from "@components/common/FlexBox";
import Text from "@components/common/Text";
import TextInput from "@components/common/TextInput";
import Button from "@components/common/Button";

interface JoinGameModalProps {
  toggleModal: () => void;
}

const Content = styled(FlexBox)`
  flex: 1;
`;

const TitleText = styled(Text)`
  font-size: 1rem;
`;

const JoinGameModal: FC<JoinGameModalProps> = ({ toggleModal = () => {} }) => {
  const [name, setName] = useState<string>("");
  const [gameId, setGameId] = useState<string>("");

  return (
    <Modal toggleModal={toggleModal}>
      <Content column rowGap="2rem">
        <FlexBox column rowGap="1rem">
          <TitleText>Please enter Name & Game detail</TitleText>
          <TextInput
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            type="text"
            value={gameId}
            placeholder="Game ID"
            onChange={(e) => setGameId(e.target.value)}
          />
        </FlexBox>
        <Button disabled={!name} className="self-center">
          START
        </Button>
      </Content>
    </Modal>
  );
};

export default JoinGameModal;
