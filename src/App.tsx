import {useState} from "react";
import Modal from "./Components/Modal/Modal.tsx";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className={'btn btn-primary ms-5 mt-5'}
                onClick={() => setShowModal(true)}>
                Order
            </button>
            <Modal
                show={showModal}
                title={' Modal Order Tittle'}
                onClose={() => setShowModal(false)}
            >
                <p className={'modal-body'}>
                    Content
                </p>
            </Modal>
        </>
    )
};

export default App
