'use client';

import { useCallback, useState } from 'react';
import BigLike from '../components/BigLike/BigLike';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import axios from 'axios';
import Footer from '../components/Footer/Footer';

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
 

  return (
    <>
      
    </>
  );
}
