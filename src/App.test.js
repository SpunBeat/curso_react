import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

describe('App', () => {
  const mockStore = configureMockStore([thunk]);
  let store;

  test('renders learn react link', () => {
    store = mockStore({users: []});
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})

