import React from 'react';
// import logo from './logo.svg';
import Cards from "./Components/Cards/Cards";
import Charts from "./Components/Charts/Charts";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import{ fetchData } from  './api/index';
import './App.css';

class App extends React.Component{
  state = {
    data :{},
  }

 async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }
  render(){
    const {data} = this.state;
  return (
    <div className="container">
      <Cards data={data}/>
      <CountryPicker/>
      <Charts/>
    </div>
  );
}
}

export default App;
