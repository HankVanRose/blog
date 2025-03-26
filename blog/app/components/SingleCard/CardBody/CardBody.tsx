import React, { JSX } from 'react';
import { CardBodyProps } from './CardBody.props';
import styles from './CardBody.module.css';
import cn from 'classnames';
import Image from '../image.svg';
import Like from '../Like/like.svg';
import Arrow from './arrow.svg';

export default function CardBody({
  size,
  className,
  children,
  ...props
}: CardBodyProps): JSX.Element {
  return (
    <div
      className={cn(styles.cardBody, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      <Image />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p className={styles.top}>Front-end · 1 месяц назад</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{fontSize:'12px'}}>4</span>
          <Like style={{ marginLeft: '4px', marginBottom: '2px' }} />
        </div>
      </div>
      <article className={styles.articleCard}>Как работать с CSS Grid</article>
      <p className={styles.midText}>
        <a
          className={styles.mdn}
          href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"
        >
          Грид-раскладка (CSS Grid Layout){' '}
        </a>
        представляет собой двумерную систему сеток в CSS. Гриды подойдут и для
        верстки основных областей страницы..
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '16px',
          width: '100%',
        }}
      >
        <p className={styles.pBotRead}>3 минуты</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={styles.readHref}>Читать</span>
          <a href="" style={{ marginLeft: '4px' }}>
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}