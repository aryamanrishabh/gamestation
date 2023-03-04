import { FC, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";
import FlexBox from "./FlexBox";
import useOutsideAlert from "@hooks/useOutsideAlert";

interface ModalProps {
  children: ReactNode;
  toggleModal: () => void;
}

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled(FlexBox)`
  background-color: var(--tertiary);
  padding: 1rem;
  border-radius: 1rem;
  width: 25rem;
  height: 20rem;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled(FlexBox)`
  flex: 1;
`;

const Modal: FC<ModalProps> = ({ children, toggleModal = () => {} }) => {
  const wrapperRef = useRef(null);
  useOutsideAlert(wrapperRef, toggleModal);

  useEffect(() => {
    document.body.style.setProperty("overflow", "hidden");

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, []);

  return (
    <Wrapper>
      <motion.div
        initial={{ scale: 0.5, y: 200 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Container ref={wrapperRef}>
          <FlexBox justify="flex-end">
            <RiCloseCircleLine
              size={24}
              onClick={toggleModal}
              color="var(--accent)"
              className="cursor-pointer"
            />
          </FlexBox>
          <Content column>{children}</Content>
        </Container>
      </motion.div>
    </Wrapper>
  );
};

export default Modal;
