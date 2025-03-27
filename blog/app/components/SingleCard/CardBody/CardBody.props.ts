import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  children?: ReactNode;
  post?:
    | {
        userId: number;
        id: number;
        title: string;
        body: string;
      }
    | undefined;
}
