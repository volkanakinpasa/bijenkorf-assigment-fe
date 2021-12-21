import '../styles/form.scss';

import { useEffect, useState } from 'react';

import Autocomplete from './Autocomplete';
import SearchBox from './SearchBox';
import { get } from '../services/api';

function Form({ characters = 2 }) {
  const [list, setList] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = async (e) => {
    setSearchQuery(e.target.value);
  };

  const search = async () => {
    if (searchQuery && searchQuery.length >= characters) {
      try {
        //AbortController
        const result = await get(searchQuery);
        if (result && result.suggestions && result.suggestions.length > 0) {
          setList(result.suggestions);
        } else setList([]);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    } else setList([]);
  };

  useEffect(() => {
    search();
  }, [searchQuery]);

  return (
    <section className="mx-auto form-section">
      <form className="w-full" role="search">
        <Autocomplete
          searchQuery={searchQuery}
          renderSearchBox={(params) => (
            <SearchBox
              {...params}
              onInputChange={onInputChange}
              searchLabel="Zoeken"
              clearLabel="Clear"
              autoComplete="off"
            />
          )}
          list={list}
        />
      </form>
    </section>
  );
}

export default Form;
