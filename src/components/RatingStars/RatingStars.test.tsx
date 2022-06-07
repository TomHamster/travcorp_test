import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RatingStars from './RatingStars';

describe('<RatingStars />', () => {
  test('it should mount', () => {
    render(<RatingStars  value={4}/>);
    
    const ratingStars = screen.getByTestId('RatingStars');

    expect(ratingStars).toBeInTheDocument();
  });
});
