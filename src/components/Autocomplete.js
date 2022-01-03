import '../styles/components/autocomplete.scss';

import AutocompleteItem from './AutocompleteItem';
import Highlighter from 'react-highlight-words';
import { useState } from 'react';

function Autocomplete(props) {
  const { searchQuery, renderSearchBox, list } = props;

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const onBlur = (e) => {
    setSelectedItemIndex(null);
  };

  const ArrowDown = (e) => {
    e.preventDefault();
    if (!list) return;

    setSelectedItemIndex((item) => {
      if (item === null) return 0;

      return item >= list.length - 1 ? item : item + 1;
    });
  };

  const ArrowUp = (e) => {
    e.preventDefault();

    if (!list) return;

    setSelectedItemIndex((item) => (item ? item - 1 : 0));
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') ArrowDown(e);
    else if (e.key === 'ArrowUp') ArrowUp(e);
  };

  return (
    <div className="relative">
      {renderSearchBox({ onBlur, onKeyDown })}
      {list && list.length > 0 && (
        <ul role="listbox" className="auto-complete-result">
          {list.map((item, index) => {
            return (
              <li
                role="option"
                aria-selected={selectedItemIndex === index}
                key={`${item.searchterm}-${item.nrResults}`}
                className={`auto-complete-result-item ${
                  selectedItemIndex === index ? 'selected-item' : ''
                } ${hoveredItemIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItemIndex(index)}
                onMouseLeave={() => setHoveredItemIndex(null)}
              >
                <AutocompleteItem>
                  <Highlighter
                    highlightClassName="highlighted"
                    searchWords={[searchQuery, `\(${item.nrResults}\)`]}
                    autoEscape={true}
                    textToHighlight={`${item.searchterm} (${item.nrResults})`}
                  />
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
