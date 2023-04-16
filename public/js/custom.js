
document.addEventListener("DOMContentLoaded", function () {
    const calendar = flatpickr("#calendar", {
        showMonths: 1,
        defaultDate: true,
    });
    const calendarInput = document.getElementById("calendar");
    calendarInput.addEventListener("click", function () {
        calendar.open();
    });

});

function handleDateSelection(selectedDates, dateStr, instance) {  
    // Send the selected date to the server
    fetch('/selected-date', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedDate: dateStr }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
  
  
  

