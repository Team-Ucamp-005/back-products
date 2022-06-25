const app = require('./app');

require('./db/mongodb')

const PORT = 4000

app.listen(PORT, () => {
  console.log(`El server esta corriendo en el puerto: ${PORT}`)
});