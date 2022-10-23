const fs = require("fs");

// Read Tasks.json file
fs.readFile("tasks.json", function (err, data) {
  // Check for errors
  if (err) throw err;

  // Converting to JSON
  const Tasks = JSON.parse(data);

  console.log(Tasks); // Print Tasks
});
