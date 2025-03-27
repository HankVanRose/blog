'use client';
import React, { JSX, useEffect, useState } from 'react';
import { SingleCardProps } from './SingleCard.props';
import styles from './SingleCard.module.css';
import cn from 'classnames';

import CardBody from './CardBody/CardBody';

export default function SingleCard({
  size,
  className,
  children,
  post,
  ...props
}: SingleCardProps): JSX.Element {
  // const [items, setItems] = useState();

  // const addBonusHandler = (id) => {
  //   const newItems = items.map((item) => {
  //     if (item.id === id) {
  //       item.likes += 1;
  //     }
  //     return item;
  //   });
  //   setItems(newItems);
  // };

  return (
    <div
      className={cn(styles.singleCard, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      <CardBody post={post}/>
    </div>
  );
}
