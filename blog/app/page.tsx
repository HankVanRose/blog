'use client';

import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

 

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  return (
     <>
      <Header size="l">HankVanRoses' Blog</Header>

      <PostList />
      </>
  );
}
