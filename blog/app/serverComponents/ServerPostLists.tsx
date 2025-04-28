import { getPosts } from '@/api/posts';
import React from 'react';
import PostList from '../components/PostList/PostList';

export default async function ServerPostLists() {
  const postsData = await getPosts();
  const allPosts = postsData?.posts || [];


  return <PostList allPosts={allPosts} />;
}
