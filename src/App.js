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
    country:'',
  }

 async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }
  handelCountryChange= async (country)=> {

}
  render(){
    const {data} = this.state;
  return (
    <div className="container">
      <Cards data={data}/>
      <CountryPicker handelCountryChange={this.handelCountryChange}/>
      <Charts/>
    </div>
  );
}
}

export default App;
