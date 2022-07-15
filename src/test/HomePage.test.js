import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import HomePage from '../pages/HomePage';

describe('Test Pages', () => {
  test('test Homepage', () => {
    const tree = renderer
      .create(<Provider store={store}><BrowserRouter><HomePage /></BrowserRouter></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
