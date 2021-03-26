const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const TimeStampToWeekDay = (timestamp) =>{
    return days[new Date(timestamp * 1000).getDay()];
}

export const TimeStampToHoursMinutes = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}: ${date.getMinutes()}`;
}