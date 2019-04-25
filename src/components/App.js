import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search/Search';
import CurrentDay from './CurrentDay/CurrentDay';
import Tabs from './Tabs/Tabs';
import Loader from "react-loader-spinner";
import style from './App.module.css';

const IMAGE_KEY = `12292081-2c4297b94c6c783694a481445`;


class App extends Component {

  state = {
    isLoading: true,
    cityName: 'Kiev',
    numForecastDay: 7,
    value: '',
    lng: 30.3,
    lat: 50.5,
    country: 'Ukraine'
  }

  updateWeather () {
    
    const { cityName, numForecastDay } = this.state;
    const KEY = `3de754b0efc54c0cb3983448192204`;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${KEY}&q=${cityName}&days=${numForecastDay}`;
    axios.get(URL)
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          lat: data.location.lat,
          lng: data.location.lon,
          country: data.location.country,
          temp_c: data.current.temp_c,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
          forecastDays: data.forecast.forecastday,
          location: data.location,
          current: data.current,
        })
      })

      .catch(err => {
        if (err) {
          console.error('err')
        }
      })
  }

  componentDidMount() {
    this.updateWeather();
    this.searchImage();
  }

  cityNameUpdate = (e) => {
    e.preventDefault();
    console.log(e.target.city.value);
    this.setState ({
      cityName: e.target.city.value,
    }, () => this.updateWeather())
  }

  getInfoFromMapClick = (e) => {
    let lat=e.latLng.lat();
    let lng=e.latLng.lng();
    console.log(lat, lng);

    const { numForecastDay } = this.state;
    const KEY = '3de754b0efc54c0cb3983448192204';
    const URL = `http://api.apixu.com/v1/forecast.json?key=${KEY}&q=${lat},${lng}&days=${numForecastDay}`;
    axios.get(URL)
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          lat: data.location.lat,
          lng: data.location.lon,
          cityName:data.location.name,
          country: data.location.country,
          temp_c: data.current.temp_c,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
          forecastDays: data.forecast.forecastday,
          location: data.location,
          current: data.current,
        })
      })

      .catch(err => {
        if (err) {
          console.error('err')
        }
      })
  }

  searchImage() {
    const {cityName} = this.state;
    const IMAGE_URL = `https://pixabay.com/api/?key=${IMAGE_KEY}&q=${cityName}`;
    axios.get(IMAGE_URL)
    .then(response => {
      return response.data;
    })
    .then(data => {
      console.log(data);
      this.setState({
        bgIMG: data.hits[0].largeImageURL
      })
    })

  }

  render() {

    const { isLoading, location, cityName, current, text, iconURL, forecastDays, lat, lng, country, bgIMG } = this.state;
    console.log(this.state);
    return (
      <div className={style.bg} style={{backgroundImage: `url(${bgIMG})`, backgroundSize: 'cover'}}>
        {isLoading ?
          <div>
            <div className={style.wrapLoader}>
              <Loader 
                type="Circles"
                color="#00BFFF"
                height="100"	
                width="100"
                margin="100px"/>
            </div>
          </div> :
          <div className={style.container} >
            <div className={style.serchContainer}>
              <Search getInput={this.cityNameUpdate} />
              <CurrentDay location={location} text={text} iconURL={iconURL}/>
            </div>
            <Tabs 
              current={current} 
              forecastDays={forecastDays} 
              getInfo={this.getInfoFromMapClick} 
              lat={lat} 
              lng={lng} 
              cityName={cityName} 
              country={country}/>
          </div>}

      </div>
    );
  }
}

export default App;
