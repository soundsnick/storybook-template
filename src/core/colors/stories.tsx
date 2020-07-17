import React, { FC } from 'react';

import { MockBackground } from '../../components/atoms/MockBackground';
import { colors } from './colors';

export default {
  title: 'Mock/Colors',
};

export const ColorPalette: FC = () => (
  <>
    <div className="container">
      <MockBackground className="mb-2" background={colors.accentBlue} color={colors.textColor}>
        colors.accentBlue
      </MockBackground>
      <MockBackground className="mb-2" background={colors.accentBlueHover} color={colors.textColor}>
        colors.accentBlueHover
      </MockBackground>
      <MockBackground className="mb-2" background={colors.darkBg} color={colors.textColor}>
        colors.darkBg
      </MockBackground>
      <MockBackground className="mb-2" background={colors.globalBg} color={colors.textColor}>
        colors.globalBg
      </MockBackground>
    </div>
  </>
);
