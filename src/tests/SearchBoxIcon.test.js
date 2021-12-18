import SearchBoxIcon from '../components/SearchBoxIcon';
import { render } from '@testing-library/react';

describe('SearchBoxIcon tests', () => {
  it('creates a snapshot', () => {
    const { asFragment } = render(<SearchBoxIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
