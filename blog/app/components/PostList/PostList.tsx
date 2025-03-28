'use client';
import React, { JSX, useEffect, useState } from 'react';
import { PostListProps } from './PostList.props';
import styles from './PostList.module.css';
import cn from 'classnames';
import PostCard from '../PostCard/PostCard';

 

export default function PostList({
  size,
  className,
  children,
  post,
  ...props
}: PostListProps): JSX.Element {
  return (
    <div
      className={cn(styles.singleCard, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      <PostCard post={post} />
    </div>
  );
}
