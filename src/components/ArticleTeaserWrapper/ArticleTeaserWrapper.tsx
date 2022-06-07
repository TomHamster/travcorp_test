import React, { FC, useState, useEffect, useMemo } from 'react';
import styles from './ArticleTeaserWrapper.module.css';
import axios, { AxiosResponse } from 'axios';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser';
import { ArticleTeaserProps } from '../ArticleTeaser/ArticleTeaser.interface';

const ArticleTeaserWrapper: FC = () => {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:3004/articles`).then((response: AxiosResponse) => {
      setResponse(response.data)
    })
  }, []);

  const data: ArticleTeaserProps[] | null = useMemo<ArticleTeaserProps[] | null>(() => {
    return response;
  }, [response])

  return <div className={styles.ArticleTeaserWrapper} data-testid="ArticleTeaserWrapper">
    <h1 className={styles.title}>Viewed trips</h1>
    <div className={styles.grid}>
      {data
        ? data.map((props: ArticleTeaserProps) => {
          return <a target="_blank" rel="noreferrer" href={props.url} className={styles.teaser}><ArticleTeaser  {...props}></ArticleTeaser></a>
        })
        : 'loading'}
    </div>

  </div>
};

export default ArticleTeaserWrapper;
