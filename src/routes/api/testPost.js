// import DB from "./_testDB";
const fs = require("fs");

// fs.readFile("./src/routes/api/temp.json", "utf-8", function (err, jsonString) {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
//   try {
//     const parsed = JSON.parse(jsonString);
//     console.log("User name:", parsed.users[0].name);
//   } catch (err) {
//     console.log("Error parsing JSON string:", err);
//   }
// });

export function get(req, res) {
  let tempJSON;

  const newUser = {
    name: req.query.name,
    age: req.query.age,
  };

  fs.readFile("./src/routes/api/temp.json", "utf-8", function (
    err,
    jsonString
  ) {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try {
      tempJSON = JSON.parse(jsonString);
      console.log("User name:", tempJSON.users[0].name);
      tempJSON.users.push(newUser);
      console.log(tempJSON);
      update();
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });

  function update() {
    const jsonString = JSON.stringify(tempJSON);
    fs.writeFile("./src/routes/api/temp.json", jsonString, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });

    //   DB.push(newElem);

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    //   const response = JSON.stringify(findName);

    res.end(jsonString);
  }
}

// {
//   "users": [
//     {
//       "name": "bob",
//       "age": 42
//     }
//   ]
// }
