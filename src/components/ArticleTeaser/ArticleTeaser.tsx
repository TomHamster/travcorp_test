import React, { FC } from 'react';
import styles from './ArticleTeaser.module.css';
import { ArticleTeaserProps } from './ArticleTeaser.interface';
import RatingStars from '../RatingStars/RatingStars';

const ArticleTeaser: FC<ArticleTeaserProps> = (props) => (

  <div className={styles.ArticleTeaser} data-testid="ArticleTeaser"
       aria-label={'Go to article:' + props.title}>
    <img alt='' src={props.img}/>
    <div className={styles.tagWrapper}>
      {props.tags.map((tag, index, tagsList) => {
        return <span>{tag.value} {tag.name} {index !== tagsList.length - 1 ? ', ' : ' '}</span>
      })}
    </div>

    <span className={styles.title}>{props.title}</span>
    <RatingStars value={props.rating}></RatingStars>
    <div className={styles.price}>
      {props.price.sale
        ? <span><b className={styles.regularPrice}>From €{props.price.sale}</b> • <s>Price €{props.price.regular}</s></span>
        : <b className={styles.regularPrice}>{props.price.regular}</b>
      }
    </div>
  </div>
);

export default ArticleTeaser;
