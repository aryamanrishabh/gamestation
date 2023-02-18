import { FC } from "react";
import Modal from "@components/common/Modal";

interface JoinGameModalProps {
  toggleModal: () => void;
}

const JoinGameModal: FC<JoinGameModalProps> = ({ toggleModal = () => {} }) => {
  return <Modal toggleModal={toggleModal}>JoinGameModal</Modal>;
};

export default JoinGameModal;
