'use client';
import React, { JSX } from 'react';
import { BigLikeProps } from './BigLike.props';

import styles from './BigLike.module.css';
import cn from 'classnames';
import BigLikeIcon from './shape.svg';
export default function BigLike({
  appearence,
  className,
  isClicked,
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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className={styles.text} style={{ marginRight: 20 }}>
          Понавилось? Жми
        </span>
        <div
          className={cn(styles.border, {
            [styles.bigliked]: isClicked,
            [styles.notBigLiked]: !isClicked,
          })}
          onClick={addLikeHandler}
        >
          <BigLikeIcon />
        </div>
      </div>
    </div>
  );
}
