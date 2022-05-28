const dateStart = document.getElementById('date-start');
const dateEnd = document.getElementById('date-end');

// Date range from SFX will look something like `05/25/2022 03:25:36 pm to 05/25/2022 03:40:36 pm`
// Convert to UTC for splunk searches
function convertDateRange(dateRange) {    
    convertedDateRange = dateRange.split(" to ")
        .map(dateString => new Date(dateString))
        .map(date => date.toLocaleString('en-US', { timeZone: 'UTC', hourCycle: "h24" }))

    dateStart.textContent = convertedDateRange[0];
    dateEnd.textContent = convertedDateRange[1];
}
