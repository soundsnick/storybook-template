import styled from '@emotion/styled';
import classNames from 'classnames';
import { FC, useState } from 'react';
import * as React from 'react';

import { Switch } from '../../atoms';
import { Props } from './props';

const ThemeSwitchBase: FC<Props> = ({ className, children, ...rest }: Props) => {
  const [theme, setTheme] = useState(localStorage.theme);

  function switchTheme(): void {
    if (localStorage.theme) {
      localStorage.removeItem('theme');
      setTheme(null);
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
    const reloadPage = (): void => location.reload();
    setTimeout(reloadPage, 200);
  }

  return (
    <div className={classNames(className, 'theme-switcher-component')} {...rest}>
      <span className="theme-switcher__title">{children}</span>
      <Switch className={classNames('ml-auto')} isActive={theme} onClick={switchTheme} />
    </div>
  );
};

export const ThemeSwitch = styled(ThemeSwitchBase)`
  display: flex;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 100px;
  .theme-switcher__title {
    display: block;
    margin-left: 10px;
    margin-right: 20px;
    color: #fff;
    font-weight: 600;
    font-size: 17px;
    text-transform: uppercase;
  }
`;
