import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Autocomplete from '../components/Autocomplete';
import SearchBox from '../components/SearchBox';

const list = [
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
];

describe('Autocomplete tests', () => {
  it('should list 3 items', () => {
    const props = {
      searchQuery: 'trui',
      clearLabel: 'Clear',
      renderSearchBox: (params) => {
        <SearchBox
          {...params}
          onInputChange={() => {}}
          searchLabel="Zoeken"
          clearLabel="Clear"
          autoComplete="off"
        />;
      },
      list,
    };

    const { queryByRole, queryAllByRole } = render(<Autocomplete {...props} />);
    const listbox = queryByRole('listbox');

    expect(listbox).toBeInTheDocument();
    expect(queryAllByRole('option')).toHaveLength(props.list.length);
  });

  //STUCK! NEED TO onKeyDown IN AUTOCOMPLETE.JS FILE
  it('should select the first one when key arrow down on input', async () => {
    const autoCompleteBoxProps = {
      searchQuery: 'trui',
      clearLabel: 'Clear',
      list,

      renderSearchBox: (params) => {
        <SearchBox
          onBlur={params.onBlur}
          onKeyDown={params.onKeyDown}
          onInputChange={() => {}}
          searchLabel="Zoeken"
          clearLabel="Clear"
          autoComplete="off"
        />;
      },
    };

    const searchBoxProps = {
      onKeyDown: (e) => {
        console.log('searchBoxProps on key down', e.key);
      },
    };

    const { getByTestId } = render(<SearchBox {...searchBoxProps} />);

    const { queryByRole, queryAllByRole } = render(
      <Autocomplete {...autoCompleteBoxProps} />
    );

    await waitFor(() => {
      const input = getByTestId('input');
      fireEvent.keyDown(input, { key: 'ArrowDown' });

      screen.debug();
    });
  });
});
