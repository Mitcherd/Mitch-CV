const calculateDaysTogether = function() {
    // Get the start and end dates from the form inputs
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Convert the dates to JavaScript Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in milliseconds between the two dates
    const difference = end - start;

    // Convert the difference from milliseconds to days
    const daysTogether = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Display the result
    document.getElementById('result').textContent = `Gefeliciteerd! Jullie zijn al ${daysTogether} dagen    samen.`;
  };

  // Add an event listener to the form submission button
  document.getElementById('submit-button').addEventListener('click', calculateDaysTogether);
