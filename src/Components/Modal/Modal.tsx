import React from 'react';

interface ButtonProps {
  type: string;
  label: string;
  onClick: () => void;
}

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons: ButtonProps[];
}

const Modal: React.FC<Props> = ({show, title, onClose, buttons, children}) => {
  return (
    <>
      <div
        className="modal-backdrop show"
        style={{display: show ? 'block' : 'none'}}/>
      <div
        className="modal show"
        style={{display: show ? 'block' : 'none'}}
        onClick={onClose}
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            onClick={event => event.stopPropagation()}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className={'btn ms-auto'} onClick={onClose}>
                X
              </button>
            </div>
            {children}
            <div className={'modal-footer'}>
              {buttons.map((btn, index) => (
                <button key={index} className={`btn btn-${btn.type} `} onClick={btn.onClick}>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;