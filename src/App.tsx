import {useState} from 'react';
import Modal from './Components/Modal/Modal.tsx';

const App = () => {
  const btnSettings = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => console.log('clicked cancel')}
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={'btn btn-primary ms-5 mt-5'}
        onClick={() => setShowModal(true)}>
        click me!
      </button>
      <Modal
        show={showModal}
        title={' Modal Order Tittle'}
        onClose={() => setShowModal(false)}
        buttons={btnSettings}
      >
        <p className={'modal-body'}>
          Content
        </p>
        <div className="modal-footer">

        </div>
      </Modal>
    </>
  );
};

export default App;
