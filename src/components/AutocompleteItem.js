import '../styles/components/searchBox.scss';

function AutocompleteItem(props) {
  const { children } = props;

  return <a>{children}</a>;
}

export default AutocompleteItem;
