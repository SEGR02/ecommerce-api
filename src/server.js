require('dotenv').config(); 
const app = require('./app');
const PORT = process.env.PORT || 8000;

app.listen(8000, ()=>{
  console.log(`Servidor o servidora corriendo en el puerto ${PORT}`);
})