'use client';
import React, { JSX, memo, useCallback, useEffect, useState } from 'react';
import { PostListProps } from './PostList.props';
import styles from './PostList.module.css';

import PostCard from '../PostCard/PostCard';
import { Post } from '@/app/(site)/page';

import Loading from '../Loading/Loading';
import Error from '../Error/Error';

function PostList({
  size,
  className,
  children,
  allPosts,
  ...props
}: PostListProps): JSX.Element {
  const [localposts, setLocalposts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (allPosts) {
      setLocalposts(allPosts);
      setLoading(false);
    } else {
      setError('Не удалось загрузить посты');
      setLoading(false);
    }
  }, [allPosts]);

  const addLikeHandler = useCallback((postId: number) => {
    setLocalposts((pervPosts) =>
      pervPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, userId: (post.userId || 0) + 1 };
        }
        return post;
      })
    );
  }, []);

  const deleteHandler = useCallback((postId: number) => {
    setLocalposts((prevPosts) =>
      prevPosts.filter((post) => post.id !== postId)
    );
    // console.log(postId);
  }, []);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error message={error} />
  ) : (
    <div className={styles.postList}>
      {localposts?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          addLikeHandler={addLikeHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}
export default memo(PostList);
