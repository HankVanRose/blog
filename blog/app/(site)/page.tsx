'use client';

import { useCallback, useState } from 'react';
import BigLike from '../components/BigLike/BigLike';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import axios from 'axios';

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
  const [liked, setLiked] = useState(false);

  const addLikeHandler = useCallback(async () => {
    const response = await axios.patch('https://dummyjson.com/posts/1', {
      title: 'I think I should shift to the moon',
    });
    setLiked((prev) => !prev);
    console.log(response);
  }, []);

  return (
    <>
      <PostList />
      <BigLike addLikeHandler={addLikeHandler} isClicked={liked} />
    </>
  );
}
