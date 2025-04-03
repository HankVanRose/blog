'use client';
import React, { JSX, useState } from 'react';
import { LikeProps } from './Like.props';
import LikeIcon from '../Like/like.svg';
import styles from './Like.module.css';
import cn from 'classnames';
export default function Like({
  isLiked,
  title,
  description,
  className,
  post,
  appearence,
  ...props
}: LikeProps): JSX.Element {
   
  const likeClass = cn(styles.like, {
    [styles.liked]: isLiked === true,
    [styles.unliked]: isLiked === false,
  });

  return (
    <span className={likeClass} {...props}>
      <LikeIcon className={isLiked ? styles.liked : styles.unliked} />
    </span>
  );
}
