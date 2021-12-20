import { fireEvent, render, waitFor } from '@testing-library/react';

import Form from '../components/Form';

jest.mock('../services/api', () => ({
  get: () =>
    new Promise((res, rej) => {
      res({
        search: 'default',
        suggestions: [
          {
            searchterm: 'heren truien',
            nrResults: 1100,
          },
          {
            searchterm: 'dames truien',
            nrResults: 1501,
          },
        ],
      });
    }),
}));

describe('Form tests', () => {
  it('should get search value when input is changed', async () => {
    const { getByTestId } = render(<Form />);
    const input = getByTestId('input');

    await waitFor(() => {
      fireEvent.change(input, {
        target: { value: 'trui' },
      });
      expect(input.value).toBe('trui');
    });
  });
});
