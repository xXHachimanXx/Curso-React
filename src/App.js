import React from 'react';
import Routes from "./Routes";  

import "./styles.css";

import Main from './pages/main/index';
import Header from './components/header/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);
/*
function App() {
  return (
    
  );
}
*/
export default App;
