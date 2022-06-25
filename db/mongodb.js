const mongoose = require('mongoose');

const url = 'mongodb+srv://fredo:Ishqsn7yK6PaJNk5@cluster0.q2kgshb.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(url, {}, () => {
  console.log('----------------')
  console.log('Conexion a la BD exitosa')
  console.log('----------------')
})


module.exports = mongoose