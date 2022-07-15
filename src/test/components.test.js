import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

describe('Test Components', () => {
  test('test Header', () => {
    const tree = renderer
      .create(<Router><Header /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test Footer', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
