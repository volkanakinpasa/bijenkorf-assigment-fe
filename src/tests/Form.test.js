import Form from '../components/Form';
import { render } from '@testing-library/react';

describe('Form tests', () => {
  it('creates a snapshot', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
