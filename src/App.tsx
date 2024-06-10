import {useState} from 'react';
import Modal from './Components/Modal/Modal.tsx';
import Alert from './Components/Alert/Alert.tsx';

const App = () => {
  const btnSettings = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => console.log('clicked cancel')}
  ];
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState(true);
  const closeAlert = () => {
    setAlert(false);
  };
  return (
    <>
      <button
        className={'btn btn-primary ms-5 mt-5'}
        onClick={() => setShowModal(true)}>
        click modal
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
      </Modal>
      {alert && (
        <div className={'w-50 mt-5'}>
          <Alert type={'warning'} onDismiss={closeAlert} show={alert}>Hello</Alert>
          <Alert type={'success'}>Success</Alert>
        </div>
      )
      }
    </>
  );
};

export default App;
