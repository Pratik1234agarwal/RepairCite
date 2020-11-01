import React, { useContext } from 'react';
import Modal from './Modal';
import { Context } from '../context/Context';

const ModalWrapper = () => {
  const { modal, setModal } = useContext(Context);
  return <Modal {...modal} handleModal={setModal} />;
};

export default ModalWrapper;
