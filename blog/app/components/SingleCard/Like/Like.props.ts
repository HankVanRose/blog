import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LikeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isLiked: boolean;
  title: string;
  description: string;
}
