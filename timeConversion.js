const dateStart = document.getElementById('date-start');
const timeStart = document.getElementById('time-start');

const dateEnd = document.getElementById('date-end');
const timeEnd = document.getElementById('time-end');

// Date range from SFX will look something like `05/25/2022 03:25:36 pm to 05/25/2022 03:40:36 pm`
// Convert to UTC for splunk searches
function convertDateRange(datetimeRange) {    
    convertedDatetimeRange = datetimeRange.split(" to ")
        .map(datetime => new Date(datetime))
        .map(datetime => {
            return [
                datetime.toLocaleString('en-US', { timeZone: 'UTC', dateStyle: "short"}),
                datetime.toLocaleString('en-US', { timeZone: 'UTC', hourCycle: "h24", timeStyle: "medium" }) 
                    + "." + ('00' + datetime.getMilliseconds()).slice(-3)
            ]
        })

    dateStart.textContent = convertedDatetimeRange[0][0];
    timeStart.textContent = convertedDatetimeRange[0][1];

    dateEnd.textContent = convertedDatetimeRange[1][0];
    timeEnd.textContent = convertedDatetimeRange[1][1];
}
