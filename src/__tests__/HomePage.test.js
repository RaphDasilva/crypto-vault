import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';

const mockStore = configureStore([thunk]);

describe('HomePage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      coins: {
        coins: [
          {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'BTC',
          },
          {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'ETH',
          },
        ],
      },
    });
  });

  it('renders the correct number of coins', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );

    const coinCount = screen.getByText('2 Coins Listed');
    expect(coinCount).toBeInTheDocument();
  });
});
