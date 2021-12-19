const get = async (query) => {
  try {
    //move url into constant or process.env.API
    const rawResponse = await fetch(`http://localhost:3000/search?q=${query}`, {
      method: 'GET',
    });
    return await rawResponse.json();
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export { get };
