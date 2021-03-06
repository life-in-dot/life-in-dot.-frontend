import ReactDom from "react-dom";

import styled from "styled-components";

import useModal from "../../lib/hooks/useModal";

export default function Modal({ children }) {
  const { hideModal } = useModal();

  return ReactDom.createPortal(
    <ModalOverlay onClick={hideModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById("portal"),
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 350px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 30px 0 rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  z-index: 999999;
`;
