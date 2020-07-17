import { FC } from 'react';
import * as React from 'react';

import { colors } from '../../../core';
import { Container } from '../../atoms/Container';
import { MockBackground } from '../../atoms/MockBackground';
import { ThemeSwitch } from './component';

export default {
  title: 'Header/ThemeSwitch',
};

export const ThemeSwitchBasic: FC = () => (
  <>
    <Container mini>
      <MockBackground className="mb-3" background={colors.accentBlue}>
        <ThemeSwitch>Тема</ThemeSwitch>
      </MockBackground>
      <MockBackground className="mb-3" background={colors.darkBg}>
        <ThemeSwitch>Theme</ThemeSwitch>
      </MockBackground>
      <MockBackground background={colors.accentBlueHover}>
        <ThemeSwitch>Switch to light mode</ThemeSwitch>
      </MockBackground>
    </Container>
  </>
);
