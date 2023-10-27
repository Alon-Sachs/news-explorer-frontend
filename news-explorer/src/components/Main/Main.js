import './Main.css';
import SearchForm from '../SearchForm/SearchForm';

function Main({children}) {
  function handleInput(e) {
    console.log(e.target.value);
  }

  return (
    <div className="Main">
      <SearchForm onSubmit={handleInput}/>
      {children}
    </div>
  );
}

export default Main;
