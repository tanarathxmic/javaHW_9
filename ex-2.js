//Exercise 2
let lightBulbStatus = "On";

// Start coding here.
lightBulbStatus = "Broken";

if (lightBulbStatus === "On") {
  console.log("Light bulb is on.");
}
else if (lightBulbStatus === "Broken") {
  console.log("Light bulb is broken.");
}
else if (lightBulbStatus === "Off") {
  console.log("Light bulb is off.");
}
else {
    console.log("Please choose the correct input (On/Off/Broken)");
}