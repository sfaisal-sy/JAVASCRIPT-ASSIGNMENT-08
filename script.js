

let currentDate = document.getElementById('cDate');
let currentMonth = document.getElementById('cMonth');
let currentDay = document.getElementById('cDay');
let funDay = document.getElementById('funDay');
let monthDays = document.getElementById('monthDays');
let currentD = document.getElementById('currentdate')
let milliSeconds = document.getElementById('milliseconds')
let minutes = document.getElementById('minutes')

let date = new Date();

let cDate = date.toString();
currentDate.textContent = cDate;
let cMonth = date.toLocaleString('default', {
    month :'long',
    
});
currentMonth.textContent = cMonth;

let day = date.toLocaleString ('default', {
        weekday : 'long'
});

currentDay.textContent = day;

let dayFun = date.toLocaleString('default', {
    weekday : 'long'
});

if(dayFun === 'Saturday') {

    funDay.textContent = dayFun;
} else {
    funDay.textContent = 'Not ';
};



let msg = date.getDate();
// monthDays = msg;

if(msg <= 15) {
    monthDays.textContent = 'First fifteen days of the month';
    console.log(monthDays);
} else {
        console.log('Last days of the month')
};

currentD.textContent = 'Current Date : : ' + date.toString();

let elapsedDate = new Date('01-01-1970');
elapsedDate =  elapsedDate.toLocaleDateString('default', {
    month: 'long',
    day : "numeric",
    year : "numeric",    
});

let milliSec =  Date.now();
// console.log(milliSeconds)
// console.log(elapsedDate.toString());
milliSeconds.textContent = 'Elapsed milliseconds since :: ' + elapsedDate + ' : : ' + milliSec;
// console.log(milliSeconds);

minutes.textContent = 'Elapsed minutes Since :: ' + elapsedDate + ' : :' + milliSec / 60 / 60;


let getHours = date.getHours();
console.log(getHours)
if (getHours > 0 && getHours < 13 ) {
    let amPm = document.getElementById('amPm');
    amPm.textContent = "It's AM";
} else {
    amPm.textContent = "It's PM"
};

let later_Date = document.getElementById('laterdate')
let laterDate = new Date('12 31 2020');
later_Date.textContent = 'Later Date : : ' + laterDate;
console.log(laterDate)