import React, { Component } from 'react';
import styles from './App.module.css';
import { Cards, CountryPicker, Chart } from './components';


class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Hello</h1>
        <Cards/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App;
