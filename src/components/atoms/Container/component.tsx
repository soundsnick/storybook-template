import styled from '@emotion/styled';

import { Props } from './props';

export const Container = styled.div<Props>`
  position: relative;
  margin: auto;
  ${({ mini }: Props) => (mini ? 'max-width: 800px' : 'max-width: 1200px')}
`;
