const testJSON = { name: "test name", age: 99 };

const content = JSON.stringify(testJSON);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(content);
}
