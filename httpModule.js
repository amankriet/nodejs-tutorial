import { createServer } from "http";

const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Aman Kumar</h1><p>Software Developer</p>");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
