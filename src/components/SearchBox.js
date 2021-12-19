import '../styles/searchBox.scss';

import Button from './Button';
import Icon from './Icon';
import { useState } from 'react';

function SearchBox(props) {
  const { onInputChange, searchLabel, clearLabel } = props;

  const [onFocus, setOnFocus] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
    onInputChange(e);
  };

  return (
    <div
      data-testid="input-container"
      onFocus={() => setOnFocus(true)}
      onBlur={() => setOnFocus(false)}
      className={`input-container relative ${onFocus ? 'focused' : ''}`}
    >
      <input
        name="search"
        type="search"
        className="search"
        placeholder={searchLabel}
        autoComplete="off"
        onChange={onChange}
        data-testid="input"
        value={value}
      />

      {value.length > 0 && (
        <Button
          icon={<Icon src="clear-icon.svg" alt={clearLabel} />}
          buttonProps={{
            name: 'clear',
            type: 'button',
            onClick: (e) => {
              setValue('');
              console.log(e);
            },
            'aria-label': clearLabel,
            className: 'button-clear',
          }}
        ></Button>
      )}
      <Button
        icon={<Icon src="search-icon.svg" alt={searchLabel} />}
        buttonProps={{
          name: 'search',
          type: 'submit',
          onClick: (e) => {
            e.preventDefault();
            console.log(e);
          },
          'aria-label': searchLabel,
        }}
      ></Button>
    </div>
  );
}

export default SearchBox;
