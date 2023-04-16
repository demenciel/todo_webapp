module.exports.getDate = function() {
    
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long' 
    };
    var today = new Date();
    var day = today.toLocaleDateString("en-CD", options);
    return (day);
}

module.exports.getWeekdays = function() {
    const weekdays = [];
    const today = new Date();
  
    for (let i = 0; i < 7; i++) {
      const options = {
        weekday: 'long',
      };
      const day = today.toLocaleDateString("en-CD", options);
      weekdays.push(day);
      today.setDate(today.getDate() + 1);
    }
    return (weekdays);
};

module.exports.getDateNumber = function() {
    const date = [];
    const today = new Date();
  
    for (let i = 0; i < 7; i++) {
      const options = {
        day: '2-digit',
      };
      const day = today.toLocaleDateString("en-CD", options);
      date.push(day);
      today.setDate(today.getDate() + 1);
    }
    return (date);
};

// calendar

  
  
