// server.js
const app = require('./app');
const port = process.env.PORT || 5000;
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
/*const server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});*/
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  const server = app.listen(port, function () {
      console.log('Express server listening on port ' + port);
    });

  console.log(`Worker ${process.pid} started`);
}
