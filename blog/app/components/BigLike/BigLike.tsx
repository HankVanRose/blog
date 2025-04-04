'use client';
import React, { JSX } from 'react';
import { BigLikeProps } from './BigLike.props';

import styles from './BigLike.module.css';
import cn from 'classnames';
import BigLikeIcon from './shape.svg';
export default function BigLike({
  appearence,
  className,
  liked,
  addLikeHandler,
  ...props
}: BigLikeProps): JSX.Element {
  return (
    <div
      className={cn(styles.biglike, className, {
        [styles.bigliked]: appearence === 'liked',
        [styles.notBigLiked]: appearence === 'notLiked',
      })}
      {...props}
    >
      <div
        className={styles.likeBox}
        
      >
        <span className={styles.text} style={{ marginRight: 20 }}>
          Понавилось? Жми
        </span>
        <div
          className={cn(styles.border, {
            [styles.bigliked]: liked,
            [styles.notBigLiked]: !liked,
          })}
          onClick={addLikeHandler}
        >
          <BigLikeIcon />
        </div>
      </div>
    </div>
  );
}
