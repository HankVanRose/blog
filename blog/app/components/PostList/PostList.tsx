'use client';
import React, { JSX, memo, useCallback, useEffect, useState } from 'react';
import { ApiResponse, PostListProps } from './PostList.props';
import styles from './PostList.module.css';
import cn from 'classnames';
import PostCard from '../PostCard/PostCard';
import { Post } from '@/app/(site)/page';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import BigLike from '../BigLike/BigLike';

function PostList({
  size,
  className,
  children,
  ...props
}: PostListProps): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const allCards = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          'https://dummyjson.com/posts'
        );

        if (response.status === 200 && response.data?.posts) {
          setPosts(response.data?.posts?.slice(0, 3));
          setLoading(false);
        }
      } catch (error) {
        console.error('Cant get any data for URL', error);
        setError(
          'Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.'
        );
      } finally {
        setLoading(false);
      }
    };

    allCards();
  }, []);

  const addLikeHandler = useCallback((postId: number) => {
    setPosts((pervPosts) =>
      pervPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, userId: (post.userId || 0) + 1 };
        }
        return post;
      })
    );
  }, []);

  const deleteHandler = useCallback((postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    console.log(postId);
  }, []);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error message={error} />
  ) : (
    <div className={styles.postList}>
      {posts.map((post) => (
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
