import React, { useContext, useState } from 'react';
import PrimaryButton from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import { GlobalContext } from '../context/globalContext';

const AboutPage = () => {
  const data = useContext(GlobalContext)
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <h1>About Page</h1>
      <h1>{JSON.stringify(data)}</h1>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Contact Us
      </PrimaryButton>
      <Modal title='Contact Us' open={showModal}>
        <h1>Contact Us Form</h1>
        <PrimaryButton onClick={() => setShowModal(false)}>
          Close
        </PrimaryButton>
      </Modal>
    </div>
  )
}

export default AboutPage;
