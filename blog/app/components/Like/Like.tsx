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
  return (
    <span
      className={cn(styles.like, {
        [styles.liked]: isLiked,
        [styles.unliked]: !isLiked,
      })}
      {...props}
    >
      <LikeIcon />
    </span>
  );
}
