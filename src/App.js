import React, { Component } from 'react';
import styles from './App.module.css';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/index';


class App extends Component {

  async componentDidMount() {
    const data = await fetchData();

    console.log(data)
  }
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
