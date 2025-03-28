'use client';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import styles from './page.module.css';
import axios from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
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
          setPosts(response.data.slice(0, 12));
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
    <div style={{ display: 'grid', height: '100vh' }}>
    <Header size="l">HankVanRoses' Blog</Header>
    {loading ? (
      <Loading />  
    ) : error ? (
      <Error message={error} />   
    ) : (
      <div className={styles.cardContainer}>
        {posts.map((post) => (
          <PostList key={post.id} post={post} />
        ))}
      </div>
    )}
  </div>
  );
}
