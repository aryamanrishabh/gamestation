import { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Modal from "@components/common/Modal";
import FlexBox from "@components/common/FlexBox";
import Text from "@components/common/Text";
import TextInput from "@components/common/TextInput";
import Button from "@components/common/Button";

interface CreateGameModalProps {
  name: string;
  setName: (name: string) => void;
  toggleModal: () => void;
  onSubmit: () => void;
}

const Content = styled(FlexBox)`
  flex: 1;
`;

const NameText = styled(Text)`
  font-size: 1rem;
`;

const CreateGameModal: FC<CreateGameModalProps> = ({
  name,
  setName,
  toggleModal = () => {},
  onSubmit = () => {},
}) => {
  const isGameLoading = useSelector((state: any) => state.game?.loading);

  return (
    <Modal toggleModal={toggleModal}>
      <Content column rowGap="2rem">
        <FlexBox column rowGap="1rem">
          <NameText>Please enter Name</NameText>
          <TextInput
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FlexBox>
        <Button
          onClick={onSubmit}
          className="self-center"
          disabled={!name || isGameLoading}
        >
          START
        </Button>
      </Content>
    </Modal>
  );
};

export default CreateGameModal;
