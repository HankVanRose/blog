import React from 'react';
import { GitLinkProps } from './GitLink.props';
import styles from './GitLink.module.css';
import cn from 'classnames';
import GitIcon from './gitIcon.svg';

export default function GitLink({
  children,
  className,
  size,

  ...props
}: GitLinkProps) {
  return (
    <span
      className={cn(styles.gitlink, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      <a
        href="https://github.com/HankVanRose"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitIcon />
      </a>
      {children}
    </span>
  );
}
