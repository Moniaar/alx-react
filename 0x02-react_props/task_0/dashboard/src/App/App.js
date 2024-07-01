import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
