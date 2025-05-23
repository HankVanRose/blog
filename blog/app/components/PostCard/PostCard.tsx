import React, { JSX, memo, useState } from 'react';
import { PostCardProps } from './PostCard.props';
import styles from './PostCard.module.css';
import cn from 'classnames';
import Image from './image.svg';
import Like from '../Like/Like';
import Arrow from './arrow.svg';
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';

function PostCard({
  size,
  className,
  children,
  post,
  addLikeHandler,
  deleteHandler,
  ...props
}: PostCardProps): JSX.Element {
  // console.log('Render карточки:', post?.id);
  const [liked, setLiked] = useState(false);

  const handleAddBonus = () => {
    if (post && post.id !== undefined && addLikeHandler) {
      addLikeHandler(post.id);
      setLiked((prev) => !prev);
    }
  };
  const handleDelete = () => {
    if (post && post.id !== undefined && deleteHandler) {
      deleteHandler(post.id);
    }
  };

  return (
    <div
      className={cn(styles.postCard, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Image />
        <RxCross1 onClick={handleDelete} style={{ cursor: 'pointer' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {post ? (
          <>
            <p className={styles.top}>Front-end · 1 месяц назад</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '12px' }}>{post.userId}</span>
              <Like
                post={post}
                style={{ marginLeft: '4px', marginBottom: '2px' }}
                onClick={handleAddBonus}
                isLiked={liked}
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
            
            {post.body.slice(0, 150)}...
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
          <Link
            href={`/posts/${post?.id}`}
            style={{ marginLeft: '4px' }}
            className={styles.readHref}
          >
            Читать
          </Link>
          <a>
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}
export default memo(PostCard);
