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
  appearence,
  ...props
}: LikeProps): JSX.Element {
  const [cliked, setClicked] = useState<boolean>(false);

  return (
    <span
      className={cn(styles.like, {
        [styles.liked]: appearence === 'liked' && isLiked !== false,
        [styles.unliked]: appearence === 'unliked' && isLiked === false,
      })}
      {...props}
    >
      <LikeIcon />
    </span>
  );
}
