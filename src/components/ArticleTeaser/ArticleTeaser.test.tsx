import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleTeaser from './ArticleTeaser';

describe('<ArticleTeaser />', () => {
  const props = {
    price: {regular: 20, sale: 10}, rating: 5, img: '', tags: [{name: 'Days', value: 25}], title: 'European qest', url: ''
  }
  test('it should mount', () => {
    render(<ArticleTeaser {...props}/>);

    const articleTeaser = screen.getByTestId('ArticleTeaser');

    expect(articleTeaser).toBeInTheDocument();
  });
});
