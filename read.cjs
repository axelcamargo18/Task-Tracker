// import fs from "fs";

// let tasks;

// // Read tasks.json file
// fs.readFile("tasks.json", function (err, data) {
//   // Check for errors
//   if (err) throw err;

//   // Converting to JSON
//   tasks = JSON.parse(data);
//   console.log(tasks); // Print tasks
//   return data;
// });

// console.log(tasks); // Print tasks

// // Defining new user
// let user = {
//   task: "new task",
//   id: "2",
// };

// // // STEP 2: Adding new data to tasks object
// tasks.push(user);

// // STEP 3: Writing to a file
// fs.writeFile("tasks.json", JSON.stringify(tasks), (err) => {
//   // Checking for errors
//   if (err) throw err;

//   console.log("Done writing"); // Success
// });

const fs = require("fs");

// Read users.json file
fs.readFile("tasks.json", function (err, data) {
  // Check for errors
  if (err) throw err;

  // Converting to JSON
  const users = JSON.parse(data);

  console.log(users); // Print users
});
