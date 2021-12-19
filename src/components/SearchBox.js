import '../styles/searchBox.scss';

import Button from './Button';
import Icon from './Icon';
import { useState } from 'react';

function SearchBox({
  onInputChange,
  searchLabel,
  clearLabel,
  autoComplete,
  onFocus,
  onBlur,
  onKeyDown,
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
    onInputChange(e);
  };

  const handleOnFocus = (e) => {
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleOnBlur = (e) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div
      data-testid="input-container"
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      className={`input-container relative ${focused ? 'focused' : ''}`}
    >
      <input
        name="search"
        type="search"
        className="search"
        placeholder={searchLabel}
        autoComplete={autoComplete}
        onChange={onChange}
        onKeyDown={onKeyDown}
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
