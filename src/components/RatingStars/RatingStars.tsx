import React, { FC } from 'react';
import styles from './RatingStars.module.css';
import { RatingStarsProps } from './RatingStars.interface';

const RatingStars: FC<RatingStarsProps> = (props: RatingStarsProps) => {
  const starPath = [];
  const maxValue = props.maxValue || 5;

  for(let i = 0; i < maxValue; i++){
    starPath.push(<path
      d="m 6 0.2935 l 1.834 3.784 l 3.966 0.4225 l -2.832 2.914 l 0.74 4.1395 l -3.708 -1.9835 l -3.7085 1.9835 l 0.7405 -4.1395 l -2.82 -2.914 l 4.166 -0.5755 z m -6 -0.2935 h 12 v 12 h -12 v -12"
      fill="white"
      fill-rule="evenodd"
      transform={`translate(${12 * i})`}/>)
  }

  return <div className={styles.RatingStars}
              data-testid="RatingStars">
    <svg style={{display: 'none'}}>
      <defs>
        <symbol id="fivestars">
          {starPath}
        </symbol>
      </defs>
    </svg>
    <div className={styles.rating}
         style={{width: 12 * maxValue}}>
      <progress className={styles.progress}
                aria-label="Rating"
                value={props.value}
                aria-valuenow={props.value}
                aria-valuemin={0}
                aria-valuemax={maxValue}
                max={maxValue}></progress>
      <svg>
        <use xlinkHref="#fivestars"/>
      </svg>

    </div>
    <span className={styles.value}>{props.value}</span>
  </div>
};

export default RatingStars;
