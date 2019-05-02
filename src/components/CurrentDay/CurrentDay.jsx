import React from 'react';
import style from './CurrentDay.module.css';
// import momentTime from 'moment-timezone';
// import moment from 'moment';

// const TimeZone = (localTime, timezome) => {
//     let momentTime = moment(localTime);
//     let tzTime = momentTime.tz(timezome);
//     let formattedTime = tzTime.format('h:mm A');
//     return formattedTime;
// }

const CurrentDay = ({location, text, iconURL}) => (
    <div className={style.container}>
        <div className={style.oneDay}>
        <div>
            <h2>{location.name}</h2>
            {/* <p>{TimeZone(location.localtime, location.tz_id)}</p> */}
            <h2>{location.name}</h2>
            <p>{location.localtime}</p>
            <h4>{text}</h4>
        </div>
        <img src={iconURL} alt="icon" width="80" height="80"/>
        </div>
    </div>

)

export default CurrentDay;