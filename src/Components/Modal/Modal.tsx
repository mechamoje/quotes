import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../Assets/tokens';

interface ModalProps {
    text: any;
}

function Modal({ text }: ModalProps) {
    const [closeModal, setCloseModal] = useState('open');

    const onClose = () => {
        setCloseModal('close');
    }

    useEffect(() => {
        if (closeModal === 'open') {
            document.body.addEventListener('click', onClose);
        }

        return () => {
            document.body.removeEventListener('click', onClose);
        };
    }, [closeModal]);

    return (
        <ModalContainer closeModal={closeModal}>
            <Article>{text}</Article>
        </ModalContainer>
    );
}

export default Modal;

const ModalContainer = styled.div<{
    closeModal: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1000;

    ${props => props.closeModal === 'open' ? `display: flex;` : `display: none;`}
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  ${colors.BackgroundColor};
  padding: 20px 24px;
  margin-top: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 0.8em;
  cursor: pointer;
  color: #000;
  position: absolute;
  top: 25.5em;
  right: 51.5em;
`;
