import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleTeaserWrapper from './ArticleTeaserWrapper';

describe('<ArticleTeaserWrapper />', () => {
  test('it should mount', () => {
    render(<ArticleTeaserWrapper />);
    
    const articleTeaserWrapper = screen.getByTestId('ArticleTeaserWrapper');

    expect(articleTeaserWrapper).toBeInTheDocument();
  });
});