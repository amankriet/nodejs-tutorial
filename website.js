import { createServer } from "http";
import { readFileSync } from "fs";

const port = process.env.PORT || 3001;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    const index = readFileSync("./index.html", "utf-8");
    res.end(index);
  } else if (req.url == "/about") {
    res.end(
      "<h1>About Me</h1><p>I am a Software Developer. My Profile:</p><ul>Location: Varanasi</ul><ul>Qualification: B.Tech (CSE)</ul><ul>Role: Android App Developer, Web Developer, Backend Developer"
    );
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1><p>Page not found</p>");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
