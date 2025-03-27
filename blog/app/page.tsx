'use client';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import SingleCard from './components/SingleCard/SingleCard';
import styles from './page.module.css';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allCards = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (response.status === 200) {
          setPosts(response.data.slice(0, 12));
          setLoading(false);
        }
      } catch (error) {
        console.error('Cant get any data for URL', error);
      }
    };

    allCards();
  }, []);

  console.log(posts);

  console.log(posts);
  return (
    <div style={{ display: 'grid', height: '100vh' }}>
      <Header size="l"> HankVanRoses' Blog </Header>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Загрузка
        </div>
      ) : (
        <div className={styles.cardContainer}>
          {posts.map((post) => (
            <SingleCard key={post?.id} size="l" post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
