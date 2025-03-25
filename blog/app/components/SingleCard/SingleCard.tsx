import React, { JSX } from 'react';
import { SingleCardProps } from './SingleCard.props';
import styles from './SingleCard.module.css';
import cn from 'classnames';
import Image from './image.svg';

export default function SingleCard({
  size,
  className,
  children,
  ...props
}: SingleCardProps): JSX.Element {
  return (
    <div
      className={cn(styles.singleCard, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      <div style={{ margin: '10px 10px 192px 10px ' }}>
        <Image />
      </div>
    </div>
  );
}
