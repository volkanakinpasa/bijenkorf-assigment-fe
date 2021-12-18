import '../styles/form.scss';

import SearchBox from './SearchBox';

function Form() {
  return (
    <section className="mx-auto form-section">
      <form className="w-full" role="search">
        <SearchBox
          onSearchInputChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </form>
    </section>
  );
}

export default Form;
