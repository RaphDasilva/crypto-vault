import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store'
import DetailsPage from '../components/DetailsPage';

describe('Details Test', () => {
  test('to render each coin details: ', () => {
    const details = render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailsPage />
        </BrowserRouter>
      </Provider>,
    );
    expect(details).toMatchSnapshot();
  });
});