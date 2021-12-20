import fetchMock from 'jest-fetch-mock';
import { get } from '../services/api';

const mockResponse = {
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
};

describe('api tests', () => {
  it('should get list', async () => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
    fetch.mockResponse(
      () =>
        new Promise((res, rej) => {
          res(JSON.stringify(mockResponse));
        })
    );
    const response = await get('trui');

    expect(response.suggestions).toHaveLength(2);
    expect(fetch.mock.calls.length).toEqual(1);
  });
});
