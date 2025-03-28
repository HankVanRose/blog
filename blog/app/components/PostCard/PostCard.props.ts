import { Post } from '@/app/page';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PostCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  children?: ReactNode;
  post?: Post;
}
