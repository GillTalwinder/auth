import express from "express";

const app = express();
const port = normalizePort(process.env.PORT || '3000');

function normalizePort(val: string) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


app.get("/", (request, response) => {
  response.send("Vrrooooom! 🚙💨");
});

app.listen(port, (err?: Error) => {
  if (err) {
    return console.error("Yiikes something exploded:", err);
  }

  console.log(`Server ready on http://localhost:${port} 🤟`);
});
