import { render, screen } from '@testing-library/react';
import GiphySearch from './GiphySearch.js'

test('renders Search Button', () => {
  render(<GiphySearch />);

  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
