import React from 'react';
import style from './Tabs.module.css';

const TabMoreDays = ({forecastDays}) => (
    <ul className={style.containerTabMoreDays}>
    {forecastDays.map(item => (
    <li key={item.date_epoch} className={style.itemTabMoreDays}>        
            <h4>{item.day.condition.text}</h4>
            <p>Date: {item.date}</p>
            <p>Max temp: {item.day.maxtemp_c} °</p>
            <p>Min temp: {item.day.mintemp_c} °</p>
            <p>Sunrise: {item.astro.sunrise}</p>
            <p>Sunset: {item.astro.sunset}</p>
            <img src={item.day.condition.icon} width="80" height="80" alt="icon"/>      
    </li>)    
    )}
    </ul> 
)

export default TabMoreDays;