'use client';
import React, { useCallback, useState } from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import BigLike from '../BigLike/BigLike';
import axios from 'axios';

export default function Footer({
  size,
  children,
  className,
  theme,

  background,
  ...props
}: FooterProps) {
  const [liked, setLiked] = useState(false);

  const addLikeHandler = useCallback(async () => {
    const response = await axios.patch('https://dummyjson.com/posts/1', {
      title: 'I think I should shift to the moon',
    });
    setLiked((prev) => !prev);
    console.log(`Отправляю PATCH запрос`, response);
  }, []);
  return (
    <div
      className={cn(styles.footer, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
        [styles.dark]: theme === 'dark',
        [styles.light]: theme === 'light',
        [styles.white]: background === 'white',
        [styles.black]: background === 'black',
      })}
      {...props}
    >
      <BigLike addLikeHandler={addLikeHandler} liked={liked} />
    </div>
  );
}
