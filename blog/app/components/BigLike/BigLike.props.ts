import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BigLikeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  liked?: boolean;
  appearence?: 'liked' | 'notLiked';
  addLikeHandler?: () => void;
}
