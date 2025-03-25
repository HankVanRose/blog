import React, { JSX } from 'react';
import { SingleCardProps } from './SingleCard.props';
import styles from './SingleCard.module.css';
import cn from 'classnames';

import CardBody from './CardBody/CardBody';

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
      <CardBody />
    </div>
  );
}
