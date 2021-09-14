import React from 'react';
import Stars from '../Stars';

import styles from './styles.module.scss';

export type Course = {
  id: number;
  title: string;
  stars: 1 | 2 | 3 | 4 | 5;
  lessons: number;
  image: string;
};

type CardProps = {
  course: Course;
};

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <div className={styles.container}>
      <img src={course.image} alt={course.title} />

      <div>
        <Stars stars={course.stars} />

        <span>{course.lessons} lessons</span>
      </div>

      <h2>{course.title}</h2>
    </div>
  );
};

export default Card;