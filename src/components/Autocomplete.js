import '../styles/autocomplete.scss';

import AutocompleteItem from './AutocompleteItem';
import { highlightPattern } from '../helpers';
import { useState } from 'react';

function Autocomplete(props) {
  //todo: add max limit
  const { searchQuery, renderSearchBox, list } = props;

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const [showList, setShowList] = useState(true);

  const onFocus = (e) => {
    // not implemented
    setShowList(true);
  };

  const onBlur = (e) => {
    setSelectedItemIndex(null);
    setShowList(false);
  };

  const ArrowDown = (e) => {
    e.preventDefault();
    if (!list) return;

    setSelectedItemIndex((item) => {
      const result =
        item === null ? 0 : item >= list.length - 1 ? item : item + 1;
      return result;
    });
  };

  const ArrowUp = (e) => {
    e.preventDefault();

    if (!list) return;

    setSelectedItemIndex((item) => (!item ? 0 : --item));
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') ArrowDown(e);
    else if (e.key === 'ArrowUp') ArrowUp(e);
  };

  return (
    <div className="relative">
      {renderSearchBox({ onFocus, onBlur, onKeyDown })}

      {showList && list && list.length > 0 && (
        <ul role="listbox" className="auto-complete-result">
          {list.map((item, index) => {
            return (
              <li
                key={`${item.searchterm}-${item.nrResults}`}
                className={`auto-complete-result-item ${
                  selectedItemIndex === index ? 'selected-item' : ''
                } ${hoveredItemIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItemIndex(index)}
                onMouseLeave={() => setHoveredItemIndex(null)}
              >
                <AutocompleteItem>
                  {highlightPattern(`${item.searchterm}`, searchQuery)}{' '}
                  {/* this two part can be in hoc */}
                  <span className="highlighted">({item.nrResults})</span>
                </AutocompleteItem>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
