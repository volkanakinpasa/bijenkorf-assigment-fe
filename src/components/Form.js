import '../styles/form.scss';

import Autocomplete from './Autocomplete';
import SearchBox from './SearchBox';
import { useState } from 'react';

function Form({ characters = 2 }) {
  const [list, setList] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > characters) {
      setList([
        {
          searchterm: 'calvin klein trui heren rood',
          nrResults: 40,
        },
        {
          searchterm: 'calvin klein trui heren blauw',
          nrResults: 50,
        },
        {
          searchterm: 'calvin klein trui heren oranje',
          nrResults: 42,
        },
      ]);
    } else setList([]);
  };

  return (
    <section className="mx-auto form-section">
      <form className="w-full" role="search">
        <Autocomplete
          searchQuery={searchQuery}
          enableHighlight={true}
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
          maxLimit={5}
        />
      </form>
    </section>
  );
}

export default Form;
