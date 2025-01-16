const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  console.log("the data to write in file :", data);
  try {
    //".." - means going up to the next directory
    fs.writeFileSync(
      path.join(__dirname,  "..",  "data", "library.json"),
      JSON.stringify(data),
      "utf-8"
    );
  } catch (err) {
    console.log(err);
  }
};