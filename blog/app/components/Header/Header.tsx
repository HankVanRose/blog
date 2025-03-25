import React from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from '../Logo/Logo';
import GitLink from '../GitLink/GitLink';
 

export default function Header({
  size,
  children,
  className,
  theme,
  background,
  ...props
}: HeaderProps) {
  return (
    <div
      className={cn(styles.header, className, {
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
      <Logo tag="h1">HankVanRose's Blog</Logo>
       <GitLink />
    </div>
  );
}
