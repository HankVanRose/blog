'use client';
import { useTheme } from 'next-theme-kit';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  reactions?: { dislikes: number; likes: number };
  tags?: string[];
  views?: number;
}

export default function Home() {
  
  return <></>;
}
