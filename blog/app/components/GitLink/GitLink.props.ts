import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface GitLinkProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  size?: 's' | 'm' | 'l';
  children?: ReactNode;
}
