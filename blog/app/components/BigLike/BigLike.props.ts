import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BigLikeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isClicked?: boolean;
  appearence?: 'liked' | 'notLiked';
  addLikeHandler?: () => void;
}
