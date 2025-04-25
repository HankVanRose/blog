import { getCurrentPosts } from '@/api/chosenpost';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Post',
};

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getCurrentPosts(id);
  if (!post) {
    return <div style={{display: 'flex', justifyContent:'center'}}>Post not found</div>;
  }

  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
