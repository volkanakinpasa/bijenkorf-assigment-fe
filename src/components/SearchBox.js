import '../styles/components/searchBox.scss';

import React, { useState } from 'react';

import Button from './Button';
import Icon from './Icon';

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
  const [searchQuery, setSearchQuery] = useState('');

  const onChange = (value) => {
    setSearchQuery(value);
    onInputChange(value);
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
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        data-testid="input"
        value={searchQuery}
      />

      {searchQuery && searchQuery.length > 0 && (
        <Button
          icon={<Icon src="clear-icon.svg" alt={clearLabel} />}
          buttonProps={{
            name: 'clear',
            type: 'button',
            onClick: (e) => {
              onChange('');
            },
            'aria-label': clearLabel,
          }}
          className="button-clear"
        ></Button>
      )}

      <Button
        icon={<Icon src="search-icon.svg" alt={searchLabel} />}
        buttonProps={{
          name: 'search',
          type: 'submit',
          onClick: (e) => {
            e.preventDefault();
          },
          'aria-label': searchLabel,
        }}
      ></Button>
    </div>
  );
}

export default React.memo(SearchBox);
