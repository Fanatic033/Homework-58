import React, {PropsWithChildren} from 'react';
import './Alert.css';

interface Props extends PropsWithChildren {
  show?: boolean;
  type: string;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({onDismiss, type, children}) => {
  return (
    <>
      <div
        className={`alert alert-${type} d-flex align-items-center`}>
        {children}
        {onDismiss && (
          <button className={'btn ms-auto'} onClick={onDismiss}>X</button>
        )}
      </div>
    </>
  );
};

export default Alert;