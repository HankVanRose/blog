import { Post } from '@/app/(site)/page';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PostCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  children?: ReactNode;
  post?: Post;
  addLikeHandler?: (postId: number) => void;
  deleteHandler?: (postId: number) => void;
}
