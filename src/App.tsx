import {useState} from "react";
import Modal from "./Components/Modal/Modal.tsx";

const App = () =>  {
const [showModal, setShowModal] = useState(false);
    return(
    <>
        <button
            className={'w-100 btn btn-primary'}
            onClick={() => setShowModal(true)}>
            Order
        </button>
        <Modal
            show={showModal}
            title={'Order'}
            onClose={() => setShowModal(false)}
        >
            <div
                className={'modal-body'}>
                Content
            </div>
            <div className={'modal-footer'}>
                <button className={'btn btn-danger'}
                        onClick={() => setShowModal(false)}
                >Cancel
                </button>
            </div>
        </Modal>
    </>
    )
};

export default App
