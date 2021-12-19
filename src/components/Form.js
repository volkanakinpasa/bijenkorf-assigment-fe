import '../styles/form.scss';

import Autocomplete from './Autocomplete';
import SearchBox from './SearchBox';
import { get } from '../services/api';
import { useState } from 'react';

function Form({ characters = 2 }) {
  const [list, setList] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = async (e) => {
    setSearchQuery(e.target.value);

    try {
      if (e.target.value.length > characters) {
        //AbortController
        const result = await get(e.target.value);
        if (result && result.suggestions && result.suggestions.length > 0)
          setList(result.suggestions);
        else setList([]);
      } else setList([]);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

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
