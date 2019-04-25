import React, { Component } from 'react';
import TabToday from './TabToday';
import TabMoreDays from './TabMoreDays';
import style from './Tabs.module.css';


export default class Tabs extends Component {

    state = {
        today: true,
        moreDays: false,
    }

    openModeDays = () => {
        this.setState({
            today: false,
            moreDays: true,
        })
    }

    openToday = () => {
        this.setState({
            today: true,
            moreDays: false,
        })
    }

    render() {

        const { forecastDays, current,lat, lng, cityName,country, getInfo } = this.props;
        const { today, moreDays } = this.state;

        return (        
            <div className={style.tabsContainer}>
                <div >
                    <button className={style.button} onClick={this.openToday}>Today</button>
                    <button className={style.button} onClick={this.openModeDays}>Mode Days</button>
                </div>
                <div className={style.tabBlock}>
                    {today && 
                    <TabToday  
                        getInfo={getInfo} 
                        lat={lat} 
                        lng={lng} 
                        cityName={cityName} 
                        country={country}
                        current={current}/>}
                </div>
                <div className={style.tabBlock}>
                    {moreDays && 
                    <TabMoreDays 
                        forecastDays={forecastDays}
                    />}
                </div>
            </div>
        )
    }
}