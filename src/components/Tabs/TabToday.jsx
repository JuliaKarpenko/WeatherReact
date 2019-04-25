import React from 'react';
import Map from './Map/Map';
import style from './Tabs.module.css';

const TabToday = ({ current, getInfo, lat, lng, cityName, country }) => (
    <div className={style.container}>
        <div className={style.oneDay}>
            <div className={style.containerOneDay}>
                <h4>{current.condition.text}</h4>
                <p>Temp: {current.temp_c} °</p>
                <p>Wind: {current.wind_kph} km/h</p>
                <p>Pressure: {current.pressure_in} mm Hd</p>
                <p>Humidity: {current.humidity} %</p>
                <p>Gust {current.gust_kph}km/h</p>
                <img src={current.condition.icon} width="80" height="80" alt="icon" />
            </div>
            <div className={style.containerMap} >
                <Map
                    getInfo={getInfo}
                    lat={lat}
                    lng={lng}
                    cityName={cityName}
                    country={country}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEV5hm-_7AqHTdPCrmjbFLY1bQkvEGpK0"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `22.5rem` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>

    </div>
)

export default TabToday;