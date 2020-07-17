import React, { FC, useState } from 'react';

import { colors } from '../../../core';
import { Switch } from './component';

export default {
  title: 'Atoms/Switch',
};

export const SwitchBasic: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  function switchHandler(): void {
    setIsActive(!isActive);
  }
  function switchHandler2(): void {
    setIsActive2(!isActive2);
  }
  function switchHandler3(): void {
    setIsActive3(!isActive3);
  }

  return (
    <>
      <div className="container">
        <Switch className="mb-2" isActive={isActive} onClick={switchHandler} />
        <Switch
          className="mb-2"
          backgroundActive="red"
          isActive={isActive2}
          onClick={switchHandler2}
        />
        <Switch
          className="mb-2"
          background={colors.accentBlueHover}
          backgroundActive="green"
          isActive={isActive3}
          onClick={switchHandler3}
        />
      </div>
    </>
  );
};
