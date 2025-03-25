import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  children?: ReactNode;
}
