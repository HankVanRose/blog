import React, { JSX } from 'react';
import { PostCardProps } from './PostCard.props';
import styles from './PostCard.module.css';
import cn from 'classnames';
import Image from './image.svg';
import Like from '../Like/Like';
import Arrow from './arrow.svg';

export default function PostCard({
  size,
  className,
  children,
  post,
  ...props
}: PostCardProps): JSX.Element {
  return (
    <div
      className={cn(styles.postCard, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      <Image />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {post ? (
          <>
            <p className={styles.top}>Front-end · 1 месяц назад</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '12px' }}>{post.id}</span>
              <Like
                post={post}
                style={{ marginLeft: '4px', marginBottom: '2px' }}
              />
            </div>
          </>
        ) : (
          <p className={styles.top}>Нет доступных данных о посте</p>
        )}
      </div>
      {post ? (
        <>
          <article className={styles.articleCard}>
            {post.title[0].toUpperCase() + post.title.slice(1, 14)} ...
          </article>
          <p className={styles.midText}>
            <a
              className={styles.mdn}
              href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"
            >
              Грид-раскладка (CSS Grid Layout){' '}
            </a>
            {post.body.slice(0, 150)}
          </p>
        </>
      ) : (
        <p className={styles.midText}>Нет содержания для отображения.</p>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '16px',
          width: '100%',
        }}
      >
        <p className={styles.pBotRead}>3 минуты</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={styles.readHref}>Читать</span>
          <a href="" style={{ marginLeft: '4px' }}>
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}
