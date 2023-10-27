import React from 'react';
import './SearchForm.css';

function SearchForm({onSubmit}) {

  const [input, setInput] = React.useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input required id="search-input" type="text" name="search" value={''}
        className="search-form__input" minLength="2" maxLength="40" placeholder="Name" onChange={handleInput} />
      <button type="submit" className="search-form__submit">Search</button>
    </form>
  );
}

export default SearchForm;
