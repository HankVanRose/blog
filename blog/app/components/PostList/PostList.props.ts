import { Post } from '@/app/(site)/page';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PostListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  children?: ReactNode;
  posts?: Post[];
  post?: Post;
  allPosts?: Post[];
}

export interface ApiResponse {
  posts: Post[];
}
