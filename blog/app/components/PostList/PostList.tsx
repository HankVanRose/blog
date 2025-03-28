'use client';
import React, { JSX, useEffect, useState } from 'react';
import { PostListProps } from './PostList.props';
import styles from './PostList.module.css';
import cn from 'classnames';
import PostCard from '../PostCard/PostCard';
import { Post } from '@/app/page';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

export default function PostList({
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
        const response = await axios.get<Post[]>(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (response.status === 200) {
          setPosts(response.data.slice(0, 2));
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
  return (
    <div
      className={cn(styles.postList, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className={styles.cardContainer}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
