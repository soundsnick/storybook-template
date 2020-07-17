import { ButtonHTMLAttributes } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly isActive?: boolean;
  readonly background?: string;
  readonly backgroundActive?: string;
};
