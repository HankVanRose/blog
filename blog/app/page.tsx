'use client';

import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

import styles from './page.module.css';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  return (
    <div style={{ display: 'grid' }}>
      <Header size="l">HankVanRoses' Blog</Header>

      <div className={styles.cardContainer}>
        <PostList />
      </div>
    </div>
  );
}
