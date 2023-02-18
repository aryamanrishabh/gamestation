import { FC } from "react";
import Modal from "@components/common/Modal";
import FlexBox from "@components/common/FlexBox";
import Text from "@components/common/Text";
import TextInput from "@components/common/TextInput";
import styled from "styled-components";
import Button from "@components/common/Button";

interface NameModalProps {
  name: string;
  setName: (name: string) => void;
  toggleModal: () => void;
  onSubmit: () => void;
}

const Content = styled(FlexBox)`
  flex: 1;
`;

const NameText = styled(Text)`
  color: white;
  font-size: 1.125rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NameModal: FC<NameModalProps> = ({
  name,
  setName,
  toggleModal = () => {},
  onSubmit = () => {},
}) => {
  return (
    <Modal toggleModal={toggleModal}>
      <Content column rowGap="2rem">
        <FlexBox column rowGap="0.75rem">
          <NameText>Please enter name</NameText>
          <TextInput value={name} onChange={(e) => setName(e.target.value)} />
        </FlexBox>
        <Button onClick={onSubmit} className="self-center">
          START
        </Button>
      </Content>
    </Modal>
  );
};

export default NameModal;
