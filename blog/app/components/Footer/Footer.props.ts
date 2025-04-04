import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  children?: ReactNode;
  theme?: 'dark' | 'light';
  background?: 'white' | 'black';
   
}
