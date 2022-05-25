import React from 'react';
import { withStorageListener } from './withStorageListener';

import { WraperProps } from './withStorageListener';

const ChangeAlert: React.FC<WraperProps> = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>We have some changes!</p>
        <button onClick={toggleShow}>Refresh Page</button>
      </div>
    );
  }
  return null;
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
