import Button from '../components/Button';
import { render } from '@testing-library/react';

describe('Button tests', () => {
  it('creates a snapshot', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  //add to cover type and onclick
});
