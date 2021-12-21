import { fireEvent, render, waitFor } from '@testing-library/react';

import Autocomplete from '../components/Autocomplete';
import SearchBox from '../components/SearchBox';

describe('Autocomplete tests', () => {
  let list;
  let props;

  beforeEach(() => {
    list = [
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

    props = {
      searchQuery: 'trui',
      clearLabel: 'Clear',
      renderSearchBox: (params) => (
        <SearchBox
          {...params}
          onInputChange={() => {}}
          searchLabel="Zoeken"
          clearLabel="Clear"
          autoComplete="off"
        />
      ),
      list,
    };
  });

  it('should list 3 items', () => {
    const { queryByRole, queryAllByRole } = render(<Autocomplete {...props} />);
    const listBox = queryByRole('listbox');

    expect(listBox).toBeInTheDocument();
    expect(queryAllByRole('option')).toHaveLength(props.list.length);
  });

  it('should select the first one when key arrow down on input', async () => {
    const { getByTestId, queryByRole, queryAllByRole } = render(
      <Autocomplete {...props} />
    );

    const input = getByTestId('input');

    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      const listBox = queryByRole('listbox');

      expect(listBox).toBeInTheDocument();
      const options = queryAllByRole('option');
      expect(options).toHaveLength(list.length);
      expect(options).toHaveLength(list.length);

      expect(options[0].classList.contains('selected-item')).toBe(true);
    });
  });
});
