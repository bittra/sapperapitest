// import testArray from "./_testDB";
const fs = require("fs");

export function get(req, res) {
  const reqName = req.query.name;

  let findName, testArray;

  fs.readFile("./src/routes/api/temp.json", "utf-8", function (
    err,
    jsonString
  ) {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try {
      const tempJSON = JSON.parse(jsonString);
      testArray = tempJSON.users;
      console.log("testArray length: ", testArray.length);
      findUser();
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });

  function findUser() {
    testArray.find((el, i, arr) => {
      if (el.name === reqName) findName = el;
    });

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    const response = JSON.stringify(findName);

    console.log(response);

    res.end(response);
  }
}
