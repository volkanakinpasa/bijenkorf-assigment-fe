import '../styles/searchBox.scss';

import Button from './Button';
import SearchBoxIcon from './SearchBoxIcon';

function SearchBox(props) {
  const { onSearchInputChange, label } = props;

  return (
    <div className="input-container relative">
      <input
        name="search"
        type="search"
        className="search"
        placeholder={label}
        autoComplete="off"
        onChange={onSearchInputChange}
        data-testid="search"
      />

      <Button
        label={label}
        icon={<SearchBoxIcon alt={label} />}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      ></Button>
    </div>
  );
}

export default SearchBox;
