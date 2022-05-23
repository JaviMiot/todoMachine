import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

type ModalProps = {
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='modal-container'>{children} </div>,
    document.getElementById('modal') as HTMLElement
  );
};
