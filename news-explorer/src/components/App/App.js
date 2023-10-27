import { Route, Switch, Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import React from 'react';

function App() {

  const [isLoggedIn , setLoggedIn] = React.useState("false");

  return (
    <div className="App">
      <Header />
      <Switch>    
          <Route exact path="/">
            <Main>
            </Main>
            <NewsCardList
                />
            <About />
          </Route>
          <Route exact path="/SavedArticle">
            <p>sadasd</p>
          </Route>
          <Route path="/">
            <p>Empty</p>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
