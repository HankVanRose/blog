import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  children?: ReactNode;
  theme?: 'dark' | 'light';
  background?: 'white' | 'black';
}
