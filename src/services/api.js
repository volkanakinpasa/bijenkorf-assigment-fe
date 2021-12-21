import { API_URL } from '../helpers/constants';

const get = async (query) => {
  try {
    const rawResponse = await fetch(`${API_URL}${query}`, {
      method: 'GET',
    });
    return await rawResponse.json();
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export { get };
