import { fireEvent, render } from '@testing-library/react';

import SearchBox from '../components/SearchBox';

describe('SearchBox tests', () => {
  it('creates a snapshot', () => {
    const { asFragment } = render(<SearchBox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders empty input', () => {
    const { getByTestId } = render(<SearchBox />);

    const input = getByTestId('search');

    expect(input.value).toBe('');
  });

  it('should get search value when input is changed', () => {
    const { getByTestId } = render(<SearchBox />);
    const input = getByTestId('search');

    fireEvent.change(input, {
      target: { value: 'lorem' },
    });

    expect(input.value).toBe('lorem');
  });
});
