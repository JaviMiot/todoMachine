import React, { FC, useState } from 'react';

import { config } from '../../config';

export interface WraperProps {
  show: boolean;
  toggleShow: () => void;
}

type WrapperComponentProps = {
  sincronize: () => void;
};

export function withStorageListener(Wrapper: FC<WraperProps>) {
  return function WrappedComponentWithListener(props: WrapperComponentProps) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === config().localStorageVersion) {
        console.log(`we have changes in ${config().localStorageVersion}`);
        console.log(change);
        setStorageChange(true);
      }
    });

    const toggleChange = () => {
      setStorageChange(false);
      props.sincronize();
    };

    return (
      <>
        <Wrapper show={storageChange} toggleShow={toggleChange} />
      </>
    );
  };
}
