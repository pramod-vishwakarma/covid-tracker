import React from 'react';
// import logo from './logo.svg';
import Cards from "./Components/Cards/Cards";
import Charts from "./Components/Charts/Charts";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import{ fetchData } from  './api/index';
import './App.css';
import coronaImage from "./images/corona.png";

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
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country:country});
}
  render(){
    const {data,country} = this.state;
  return (
    <div className="container">
    <img className="image" src={coronaImage} alt="covid-19"/>
      <Cards data={data}/>
      <CountryPicker handelCountryChange={this.handelCountryChange}/>
      <Charts data={data} country={country} />
    </div>
  );
}
}

export default App;
