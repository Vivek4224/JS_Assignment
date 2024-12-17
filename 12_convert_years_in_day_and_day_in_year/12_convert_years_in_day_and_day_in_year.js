function YearToDay(year){
    const DayInYear = 365; 
    return (DayInYear * year)

}

function DayTOYear(days){
    const DayInYear = 365;
    return (days/DayInYear)

}

let days = 250;
let yearFromDay = DayTOYear(days)
console.log(`the year is ${yearFromDay.toFixed(1)}`);

let year = 5
let dayFromYear = YearToDay(year)
console.log(`the day is ${dayFromYear}`);

