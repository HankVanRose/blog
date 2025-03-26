'use client';
import React, { JSX, useState } from 'react';
import { LikeProps } from './Like.props';
import LikeIcon from '../Like/like.svg';
export default function Like({
  isLiked,
  title,
  description,
  className,
  ...props
}: LikeProps): JSX.Element {
  const [cliked, setClicked] = useState<boolean>(false);

  const handleClickLike = async (e) => {
    e.preventDefault();
    setClicked;
  };
  return <span><LikeIcon/></span>
}
